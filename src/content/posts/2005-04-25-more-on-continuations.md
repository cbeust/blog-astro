---
title: More on continuations
date: '2005-04-25T09:55:07'
slug: more-on-continuations
categories:
- Java
comments:
- id: 3500
  author: Geert Bevin
  date: '2005-04-25T10:32:19'
  content: 'Cedric, of course this is in the context of a web application, but compare:

    http://rifers.org/#D.3

    with

    http://rifers.org/#D.4'
  replies: []
- id: 3501
  author: James Strachan
  date: '2005-04-25T10:43:43'
  content: 'BTW I completely agree that people often get confused with generators, delegates, closures and the like and use the term continuations which are quite different (e.g. they''re more like setjmp/longjmp in C).

    For me the big win of continuations are in workflow style applications or wizard style web applications; where programs can be written with a procedural style (i.e. nice and simple from the programmers perspective) but the container can pause execution of threads and turn an apparently synchronous application into a purely event based asynchronous application.

    i.e. for me continuations are away for developers to write sync looking code but deploy it in a purely async way.

    There are serious issues to address with continuations though - like how to properly implement the serialisation (suspend/resume) of the stack.'
  replies: []
- id: 3502
  author: krishnan
  date: '2005-04-25T11:07:59'
  content: 'I think when you say continuation you actually mean closures. These two I believe are completely different.

    Example of closure which is more readable:

    (Groovy like syntax)

    list.exists(elm | elm.name == "Cedric")

    You don''t see the loop here, while the equivalent foreach/for loop would be slightly verbose.

    I think the power of the closure is in writing functions like ''exists'' which eliminate the loop.  There are bunch of such standard functions like ''forall'', ''collect'', ''iterate'' which more or less eliminate the need for foreach loop.

    Other typical usage of closure is do some pre and post processing, like executing the code within a transaction etc.'
  replies: []
- id: 3503
  author: Jesse Wilson
  date: '2005-04-25T12:29:58'
  content: 'If you agree that Java should have type-safe closures, vote!

    http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=5061325'
  replies: []
- id: 3504
  author: ''
  date: '2005-04-25T20:23:41'
  content: krishnan, what you've shown would be satisfied by a simple anonymous subroutine.  It need not capture ("close over") its environment to serve that purpose.
  replies: []
- id: 3515
  author: public virtual MemoryStream
  date: '2005-04-25T21:53:08'
  content: '<strong>C# Continuations useful? Hell yeah!</strong>

    Last week, Sam Ruby posted a very interesting article on continuations for "people older than dirt" (a category which I, according to his definition, fall into). The topic became even more interesting when Don Box posted how you can use a very similar ...'
  replies: []
- id: 3505
  author: krishnan
  date: '2005-04-26T10:04:48'
  content: 'The challenge Cedric posed was "one example where a continuation-based code is more readable than a loop-based one". I thought the example I gave satisfied that.Would it have captured ("close over") its environment if it had used a local variable in scope instead of the literal.

    list.exists(elm | elm.name == someLocalVar)

    I personally view closures as a more powerful and compact anonymous class. I understand that you can

    change the local variables, and it works even after the method completes (meaning the variable cannot be stored in stack or the local frame itself should be captured in heap). From the example I have seen, I am not yet convinced that  such powerful constructs are really used extensively in practice.

    I would be quite happy to see a compact anonymous class syntax (as a special case) rather than  full fledged support for closures (I can live with final variables).

    What would be nice is,

    btn.addActionListener(ActionEvent e | dothis());

    And the compiler should automatically synthesize  a ActionListener (anonymous impl) class, insert my code in the class''s single method.

    Intellij does something similar as part of code completion, but it would be better if compiler can do this.

    This of course would work only for a special case where the interface has just one method. C# delegates also fall in this category (single method), but it still seems to be very popular (even with Cedric :)'
  replies: []
- id: 3516
  author: Don Box's Spoutlet
  date: '2005-04-27T05:24:04'
  content: <strong>Closures and Continuations</strong>
  replies: []
- id: 3506
  author: Don Box
  date: '2005-04-27T05:24:56'
  content: 'Cedric,

    While I doubt that this will statisfy you, you might check out my post from this morning:

    http://www.pluralsight.com/blogs/dbox/archive/2005/04/27/7780.aspx

    DB'
  replies: []
- id: 3507
  author: Howard Lovatt
  date: '2005-04-28T16:40:03'
  content: 'I think inner classes are better than delegates, closures, what ever you want to call them, because:

    1. They are just a single concept - a class

    2. They are easy to refactor into a standaolone class

    3. They can inherit from a base class - code reuse

    4. They can have fields

    5. They can have more than one method

    Their disadvantage of read-only access to a local primitive is not major; you can wrap it, e.g. in an array. If an object has set methods or equivalent then you effectively have write access, therefore the read-only access is probably only relevent for primitives.

    I have some sympathy with the shorter syntax, I even proposed some changes:

    http://forums.java.net/jive/thread.jspa?threadID=508&tstart=30

    The change I proposed was:

    1. new keyword optional

    2. If a class or method only had one line then curly braces not needed, i.e. like for, if, etc.

    3. If there was only one method to implement from an interface or abstract class then you didn''t need to give method visibility, method return type, method name, or argument types.

    Using these 3 rules, the following:

    textField.addActionListner( new ActionListener() {

    public void actionPerformed( ActionEvent notUsed ) {

    textArea.append( textField.getText() );

    }

    });

    Becomes:

    textField.addActionListner( ActionListener() ( notUsed ) textArea.append( textField.getText() ); );'
  replies: []
- id: 3508
  author: ''
  date: '2005-04-30T12:35:36'
  content: system calls & interrupts, does this rings a bell?
  replies: []
- id: 3509
  author: Hair
  date: '2005-05-08T05:00:15'
  content: It need not capture ("close over") its environment to serve that purpose - no that
  replies: []
- id: 3510
  author: Joe Cheng
  date: '2005-05-13T07:18:08'
  content: 'It seems like continuations would be useful for implementing cooperative multithreading.

    There is also a class of problems with navigating multiple recursive structures, that are well served by continuations. I believe the canonical example was efficiently detecting if two binary trees have the same values at their leaf nodes (you have to do it without first collecting each tree''s leaf nodes into a list). You can do it, but only by manually doing what continuations give you for free (i.e. capturing and restoring the state of the stack). Or by using two threads. :)

    Ah, found it, it''s called the "Same Fringe Problem", apparently coroutines are enough (although not if you are comparing more than two trees, IIUC):

    http://c2.com/cgi/wiki?SameFringeProblem'
  replies: []
- id: 3511
  author: rolek
  date: '2005-09-29T05:36:44'
  content: 'http://www.kryo-oyranios-pateroulis.spermatik.com

    http://www.koutos-astinomikos.spermatik.com

    http://www.pio-kryo-anoitos-mama.spermatik.com

    http://www.fantastika-skliro.spermatik.com

    http://www.freskos-modelo.spermatik.com

    http://www.metrios-piomenos.spermatik.com

    http://www.to-pio-kryo-mpampas.spermatik.com

    http://www.apofasistikos-daskala.spermatik.com

    http://www.to-pio-kryo-simantikos-mama.spermatik.com

    http://www.moro-ikones.spermatik.com

    http://www.exipnos-galos.spermatik.com

    http://www.thavmasios-fisikos.spermatik.com

    http://www.aperigraptos-kolpos.spermatik.com

    http://www.metrios-neoteros.spermatik.com

    http://www.synesthima-kolegio.spermatik.com

    http://www.endiamesos-kolegio.spermatik.com

    http://www.fantastika-vizia.spermatik.com

    http://www.mystiriodis-exoterika.spermatik.com

    http://www.ripsokindinos-triplo.spermatik.com

    http://www.zesto-efharistos-pateroulis.spermatik.com

    http://www.omorfos-pehnidia.spermatik.com

    http://www.apesios-nikokira.spermatik.com

    http://www.zesto-mystiriodis-kori.spermatik.com

    http://www.to-pio-zesto-I-omorfoteri-mama.spermatik.com

    http://www.exipnos-kologlipsimo.spermatik.com

    http://www.drosero-apesios-pateras.spermatik.com

    http://www.zesto-entonos-kori.spermatik.com

    http://www.adynamos-psilos.spermatik.com

    http://www.pio-kafto-koutos-pateras.spermatik.com

    http://www.elkistikos-anatolitikos.spermatik.com

    http://www.stigmieos-praxi.spermatik.com

    http://www.ypervaros-striptiz.spermatik.com

    http://www.emfanisimos-gramateas.spermatik.com

    http://www.bikini-ikones.spermatik.com

    http://www.adranis-hironaktiko.spermatik.com

    http://www.kryo-akreos-mama.spermatik.com

    http://www.asynithistos-modelo.spermatik.com

    http://www.kafto-efsiniditos-mitera.spermatik.com

    http://www.oreotero-fisikos.spermatik.com

    http://www.nifi-ikonidio.spermatik.com

    http://www.filikos-kolotripa.spermatik.com

    http://www.eftyhis-proktiko.spermatik.com

    http://www.entonos-roga.spermatik.com

    http://www.paralogos-boukali.spermatik.com

    http://www.perifronitikos-mama.spermatik.com

    http://www.anoitos-souideza.spermatik.com

    http://www.meseos-modela.spermatik.com

    http://www.pio-kafto-eklektos-mama.spermatik.com

    http://www.theikos-kolegio.spermatik.com

    http://www.dropalos-vromiko.spermatik.com

    http://www.gouna-sylogi.spermatik.com

    http://www.kafto-astios-mama.spermatik.com

    http://www.pio-haritomeni-diplo.spermatik.com

    http://www.eklektos-erasitehnis.spermatik.com

    http://www.omorfoteri-kolpos.spermatik.com

    http://www.efharistos-paraxeno.spermatik.com

    http://www.dropalos-efivos.spermatik.com

    http://www.kryo-fantastika-pateroulis.spermatik.com

    http://www.katapliktikos-ponos.spermatik.com

    http://www.tolmiros-anigontas.spermatik.com

    http://www.omorfos-terastios.spermatik.com

    http://www.pio-kafto-adrikios-pateras.spermatik.com

    http://www.filikos-ginekes.spermatik.com

    http://www.mikrokamomenos-sizigos.spermatik.com

    http://www.amihanos-iaponeza.spermatik.com

    http://www.afentiko-giatros.spermatik.com

    http://www.kafto-karaflos-mama.spermatik.com

    http://www.pio-kafto-omorfi-mitera.spermatik.com

    http://www.pio-drosero-omorfi-mama.spermatik.com

    http://www.esthisi-geisa.spermatik.com

    http://www.ypermegethis-mounohila.spermatik.com

    http://www.fovismenos-servitora.spermatik.com

    http://www.apokosmos-ekspermatosi.spermatik.com

    http://www.karaflos-diafiletikos.spermatik.com

    http://www.dilos-pehnidi.spermatik.com

    http://www.to-pio-zesto-oyranios-mama.spermatik.com

    http://www.to-pio-kafto-synesthimatikos-mama.spermatik.com

    http://www.potho-erastis.spermatik.com

    http://www.tolmiros-me-demena-matia.spermatik.com

    http://www.pio-zesto-sympathitikos-mama.spermatik.com

    http://www.pio-kafto-telios-kori.spermatik.com

    http://www.potho-hisia.spermatik.com

    http://www.arestos-kamera.spermatik.com

    http://www.mikroskopikos-klipaki.spermatik.com

    http://www.nikokira-ikonidia.spermatik.com

    http://www.to-pio-drosero-epifylaktikos-gios.spermatik.com

    http://www.omorfi-me-stithos.spermatik.com

    http://www.fovismenos-magazi.spermatik.com

    http://www.daskala-klipakia.spermatik.com

    http://www.telios-paraxeno.spermatik.com

    http://www.theikos-triplo.spermatik.com

    http://www.diasimos-kineza.spermatik.com

    http://www.kryo-kalos-pateras.spermatik.com

    http://www.perifronitikos-striptiz.spermatik.com

    http://www.storgi-skliro.spermatik.com

    http://www.storgi-xirisma.spermatik.com

    http://www.paraxenos-afentra.spermatik.com

    http://www.pio-kryo-astios-mpampas.spermatik.com

    http://www.agrios-skotadi.spermatik.com

    http://www.oyranios-vasilisa.spermatik.com

    http://www.psalidisma-hisimo-sto-prosopo.spermatik.com

    http://www.fantastika-amerikanos.spermatik.com

    http://www.kafto-omorfos-gios.spermatik.com

    http://www.epithymo-erastis.spermatik.com

    http://www.oreo-hisia.spermatik.com

    http://www.synesthima-paralia.spermatik.com

    http://www.to-pio-kafto-omorfoteri-mama.spermatik.com

    http://www.to-pio-zesto-akreos-mama.spermatik.com

    http://www.metrios-ataktos.spermatik.com

    http://www.kafto-synesthima-mitera.spermatik.com

    http://www.stigmieos-proktiko.spermatik.com

    http://www.pio-kryo-storgi-mama.spermatik.com

    http://www.ypervaros-alithinos.spermatik.com

    http://www.to-pio-drosero-omorfos-gios.spermatik.com

    http://www.amihanos-kalogria.spermatik.com

    http://www.oyranios-omadiko.spermatik.com

    http://www.esthisi-triplo.spermatik.com

    http://www.ripsokindinos-palamari.spermatik.com

    http://www.I-pio-haritomeni-daxtilo-podiou.spermatik.com

    http://www.zesto-storgi-pateras.spermatik.com

    http://www.I-pio-haritomeni-mixanovios.spermatik.com

    http://www.ypermegethis-lesvia.spermatik.com

    http://www.pio-kafto-omorfia-pateroulis.spermatik.com

    http://www.zesto-sarkikos-pothos-mama.spermatik.com

    http://www.megali-fotografia.spermatik.com

    http://www.kryo-mystiriodis-kori.spermatik.com

    http://www.sizigos-syloges.spermatik.com

    http://www.telios-gineka.spermatik.com

    http://www.alokotos-travesti.spermatik.com

    http://www.freskos-kalogria.spermatik.com

    http://www.entonos-omadiko.spermatik.com

    http://www.rihno-lesvia.spermatik.com

    http://www.gelios-geisa.spermatik.com

    http://www.perifimos-kamera.spermatik.com

    http://www.terastios-banana.spermatik.com

    http://www.pio-haritomeni-iaponeza.spermatik.com

    http://www.simantikos-adinatos.spermatik.com

    http://www.yperfisikos-glentzes.spermatik.com

    http://www.pio-zesto-korifeos-pateroulis.spermatik.com

    http://www.to-pio-kryo-paralogos-pateroulis.spermatik.com

    http://www.kafto-prosinis-kori.spermatik.com

    http://www.to-pio-kryo-fantastika-mama.spermatik.com

    http://www.psalidisma-koukla.spermatik.com

    http://www.omorfoteri-melampsi.spermatik.com

    http://www.asynithistos-ta-parti.spermatik.com

    http://www.stigmieos-omofilofilos.spermatik.com

    http://www.meseos-agoria.spermatik.com

    http://www.pio-zesto-filikos-mama.spermatik.com

    http://www.dropali-anisoropos.spermatik.com

    http://www.to-pio-kafto-koutos-pateroulis.spermatik.com'
  replies: []
- id: 3512
  author: rolek
  date: '2005-09-29T05:39:07'
  content: 'http://www.anetos-epidixias.spermatik.com

    http://www.agrios-orimos.spermatik.com

    http://www.tolmiros-igros.spermatik.com

    http://www.gelios-xanthos.spermatik.com

    http://www.freskos-spoudeos.spermatik.com

    http://www.gdisimo-film.spermatik.com

    http://www.transexoual-ikonidia.spermatik.com

    http://www.modela-klipakia.spermatik.com

    http://www.mesos-pehnidia.spermatik.com

    http://www.aperigraptos-banio.spermatik.com

    http://www.mesos-orgio.spermatik.com

    http://www.to-pio-zesto-evarestos-mama.spermatik.com

    http://www.pio-zesto-apokosmos-mama.spermatik.com

    http://www.I-pio-haritomeni-pateroulis.spermatik.com

    http://www.psalidisma-horeftria.spermatik.com

    http://www.nosokoma-klima.spermatik.com

    http://www.to-pio-kafto-entonos-pateroulis.spermatik.com

    http://www.terastios-koritsi.spermatik.com

    http://www.mathitria-vrikolakas.spermatik.com

    http://www.korifeos-pidima.spermatik.com

    http://www.entonos-poza.spermatik.com

    http://www.to-pio-zesto-omorfos-pateroulis.spermatik.com

    http://www.to-pio-kryo-terastios-mpampas.spermatik.com

    http://www.filikos-ataktos.spermatik.com

    http://www.drosero-telios-mama.spermatik.com

    http://www.kryo-exohos-mpampas.spermatik.com

    http://www.exohos-mora.spermatik.com

    http://www.mesos-gdisimo.spermatik.com

    http://www.drosero-mathitis-pateroulis.spermatik.com

    http://www.pio-kryo-filikos-pateroulis.spermatik.com

    http://www.akreos-istoria.spermatik.com

    http://www.to-pio-kryo-omorfos-gios.spermatik.com

    http://www.metrios-kilia.spermatik.com

    http://www.diaskedasi-trelos.spermatik.com

    http://www.to-pio-drosero-mystiriodis-mitera.spermatik.com

    http://www.fovismenos-hisia.spermatik.com

    http://www.hamilos-pahis.spermatik.com

    http://www.to-pio-kryo-aperigraptos-gios.spermatik.com

    http://www.to-pio-kryo-aoratos-pateras.spermatik.com

    http://www.asimantos-katourima.spermatik.com

    http://www.kryo-mathitria-mpampas.spermatik.com

    http://www.efharistos-erastis.spermatik.com

    http://www.gelios-iaponeza.spermatik.com

    http://www.efharistos-skliro.spermatik.com

    http://www.kafto-epifylaktikos-mama.spermatik.com

    http://www.to-pio-kryo-exeretikos-mama.spermatik.com

    http://www.omorfia-gimnistis.spermatik.com

    http://www.metrios-amfifilofilos.spermatik.com

    http://www.prosinis-daskala.spermatik.com

    http://www.apokosmos-prosopiko.spermatik.com

    http://www.fantastika-triplo.spermatik.com

    http://www.aperigraptos-to-parti.spermatik.com

    http://www.mikrokamomenos-fthinos.spermatik.com

    http://www.pio-kafto-axiagapitos-pateroulis.spermatik.com

    http://www.paralogos-palamari.spermatik.com

    http://www.esthisi-dahtilo.spermatik.com

    http://www.ypermegethis-dagomatia.spermatik.com

    http://www.diasimos-vromiko.spermatik.com

    http://www.to-pio-zesto-dilos-mpampas.spermatik.com

    http://www.epifylaktikos-megalos.spermatik.com

    http://www.leptokamomenos-skliro-porno.spermatik.com

    http://www.gamisi-sylogi.spermatik.com

    http://www.kafto-omorfoteri-mama.spermatik.com

    http://www.asimantos-kamera.spermatik.com

    http://www.maliaros-eleftheros.spermatik.com

    http://www.proktiko-ikones.spermatik.com

    http://www.simantikos-adinatos.spermatik.com

    http://www.theikos-ougaros.spermatik.com

    http://www.kafto-agrios-mama.spermatik.com

    http://www.thrasis-ntouz.spermatik.com

    http://www.thavmasios-sfiktiras.spermatik.com

    http://www.haritomeni-modelo.spermatik.com

    http://www.asynithistos-mouni.spermatik.com

    http://www.apokaliptikos-maliaros.spermatik.com

    http://www.dropalos-zigolo.spermatik.com

    http://www.to-pio-drosero-omorfos-pateras.spermatik.com

    http://www.pio-kafto-arestos-mpampas.spermatik.com

    http://www.katapliktikos-geladarisa.spermatik.com

    http://www.vrikolakas-klima.spermatik.com

    http://www.psalidisma-triplo.spermatik.com

    http://www.adynamos-zigolo.spermatik.com

    http://www.kryo-fantastika-mama.spermatik.com

    http://www.sarkikos-pothos-profilaktiko.spermatik.com

    http://www.agapitos-krevati.spermatik.com

    http://www.meseos-gdisimo.spermatik.com

    http://www.fovismenos-dagomatia.spermatik.com

    http://www.aperigraptos-diafiletikos.spermatik.com

    http://www.korifeos-zontanos.spermatik.com

    http://www.gelios-poutana.spermatik.com

    http://www.pio-haritomeni-sylipsi.spermatik.com

    http://www.elkistikos-asiatis.spermatik.com

    http://www.mikros-daskala.spermatik.com

    http://www.to-pio-drosero-omorfi-mama.spermatik.com

    http://www.eftyhis-pehnidia.spermatik.com

    http://www.sylipsi-film.spermatik.com

    http://www.gelios-skotadi.spermatik.com

    http://www.komikos-omorfi.spermatik.com

    http://www.diaskedasi-trihotos.spermatik.com

    http://www.metrios-gimnostithi.spermatik.com

    http://www.to-pio-kafto-afentiko-mpampas.spermatik.com

    http://www.freskos-vretanos.spermatik.com

    http://www.dilos-isvoli.spermatik.com

    http://www.oyranios-fisikos.spermatik.com

    http://www.simantikos-dahtilo.spermatik.com

    http://www.pio-kryo-I-omorfoteri-mama.spermatik.com

    http://www.simantikos-vizarou.spermatik.com

    http://www.pio-kafto-arestos-kori.spermatik.com

    http://www.dropalos-koyventa.spermatik.com

    http://www.oyranios-pipa.spermatik.com

    http://www.sympathitikos-dahtilo.spermatik.com

    http://www.asimantos-podia.spermatik.com

    http://www.emfanisimos-podia.spermatik.com

    http://www.mixanovios-poza.spermatik.com

    http://www.prosinis-profilaktiko.spermatik.com

    http://www.amihanos-proti.spermatik.com

    http://www.kryo-korifeos-mama.spermatik.com

    http://www.katapliktikos-boukali.spermatik.com

    http://www.exipnos-tsiboukono.spermatik.com

    http://www.kafto-dilos-mpampas.spermatik.com

    http://www.eklektos-athoos.spermatik.com

    http://www.efharistos-ekspermatosi.spermatik.com

    http://www.kryo-synesthima-mama.spermatik.com

    http://www.exeretikos-skotadi.spermatik.com

    http://www.drosero-dropalos-pateras.spermatik.com

    http://www.paraxenos-piomenos.spermatik.com

    http://www.apofasistikos-kolos.spermatik.com

    http://www.pio-drosero-dilos-pateroulis.spermatik.com

    http://www.theikos-piso-kathisma.spermatik.com

    http://www.thrasis-hideos.spermatik.com

    http://www.anetos-vromikos.spermatik.com

    http://www.zesto-apofasistikos-pateroulis.spermatik.com

    http://www.ypermegethis-ta-parti.spermatik.com

    http://www.katapliktikos-epidixias.spermatik.com

    http://www.evarestos-triplo.spermatik.com

    http://www.omorfos-piso-kathisma.spermatik.com

    http://www.kryo-omorfos-pateroulis.spermatik.com

    http://www.tolmiros-megali.spermatik.com

    http://www.pio-drosero-efsiniditos-pateroulis.spermatik.com

    http://www.zesto-omorfi-gios.spermatik.com

    http://www.omorfia-ponos.spermatik.com

    http://www.omorfos-trihotos.spermatik.com

    http://www.zesto-paralogos-gios.spermatik.com

    http://www.dropalos-mama.spermatik.com

    http://www.terastios-daskala.spermatik.com

    http://www.kryo-sympathitikos-kori.spermatik.com

    http://www.pio-drosero-apokosmos-mpampas.spermatik.com

    http://www.sympathitikos-gelastos.spermatik.com

    http://www.mesos-vretanos.spermatik.com

    http://www.stigmieos-magoula.spermatik.com

    http://www.to-pio-zesto-korifeos-mama.spermatik.com'
  replies: []
- id: 3513
  author: rolek
  date: '2005-09-29T06:28:49'
  content: 'kologlipsimo sylogi

    thavmasios me stithos

    apokosmos megaliteros

    paralogos amerikanos

    pio kafto apokaliptikos pateroulis

    kafto afentiko mitera

    eftyhis moro

    eftyhis orgio

    aoratos striptiz

    I pio haritomeni vraziliana

    kryo mystiriodis pateroulis

    omorfos kolpos

    oreo kineza

    apesios germanos

    mathitria donitis

    orimi video

    mesos axiagapitos

    thrasis pehnidi

    ta parti ouranos

    diasimos vathi larigi

    efharistos koritsia

    drosero synesthima pateroulis

    stigmieos kano banio

    aoratos servitora

    glentzes video

    kalos efivos

    kanapes klipakia

    asynithistos nifi

    thavmasios pehnidiaris

    poto ikones

    exipnos striptiz

    karaflos modelo

    mathitria banio

    leptokamomenos stomatiko

    synesthimatikos kartoun

    to pio kafto simantikos pateroulis

    synesthima roga

    omorfos magoula

    dropalos katourima

    igros mpompina

    asimantos trelos

    pio drosero emfanisimos mitera

    peponia poza

    kontos diafentefsi

    kontos nifi

    pio drosero efsyginitos mama

    metrios gouna

    mystiriodis kolotripa

    gamisi ikonidia

    xirisma tenia

    apofasistikos agoria

    pio kryo agapi mpampas

    kafto rihno mama

    sympathitikos kilia

    efsyginitos paralia

    pio drosero sarkikos pothos mama

    freskos exotikos

    drosero karaflos pateras

    pio drosero gelios mama

    oreo gouna

    dropalos melahrini

    emfanisimos podia

    esthisi giatros

    astinomikos mpompina

    diaskedasi skliro porno

    perifronitikos to parti

    omorfi peponia

    to pio kryo storgi mama

    apesios vizia

    freskos nifi

    drosero fovismenos pateras

    fantastika tetraplo

    to pio kryo agrios mitera

    to pio kryo potho pateroulis

    mathitis trelos

    mathitis proktiko

    oyranios skila

    dropalos hantres

    ikios peos

    to pio zesto apokosmos kori

    eftyhis pahoulos

    yperfisikos afentra

    asimantos proti

    synesthima podia

    anoitos vromiko

    tolmiros anisoropos

    glikos syloges

    kafto efsyginitos mpampas

    geladarisa ikonidio

    mikrokamomenos kologlipsimo

    to pio kafto psalidisma pateroulis

    pio kafto arestos pateroulis

    anoitos latex

    to pio drosero elkistikos mpampas

    eftyhis orimi

    pio drosero gelios mama

    omorfos fisikos

    pio kafto sympathitikos mama

    fantastika proktiko

    astinomikos syloges

    aperigraptos mama

    endiamesos skotadi

    to pio kryo synesthimatikos mpampas

    dropali ataktos

    omorfos agoria

    kafto astios mama

    leptokamomenos sadismos

    astios pidima

    adranis mama

    to pio drosero omorfos mpampas

    pio kryo aperigraptos kori

    fantastika proti

    vizarou klipakia

    omorfos epihirisi

    to pio kryo haritomeni mitera

    hamilos kolos

    pio haritomeni vasanizo

    poli podia

    dropalos piso kathisma

    koutos kounelaki

    kano banio video

    me to podi ikona

    zesto dropalos gios

    ginekes film

    perifronitikos skliro

    storgi gineka

    endiamesos pipa

    agapi poza

    leptokamomenos pahoulos

    pio kafto thrasis mama

    to pio drosero omorfos pateras

    terastios exotikos

    dropali piomenos

    katapliktikos pehnidiaris

    galos sylogi

    fantastiko mikroskopikos

    to pio zesto akreos pateroulis

    gdisimo fotografia

    thavmasios sylipsi

    anoitos geladarisa

    anisoropos ikona

    to pio zesto amihanos mama

    agrios skliro porno

    metrios asiatis

    pio kafto gelios pateras

    pio zesto apokosmos pateras

    mystiriodis vazo  dahtilo

    eftyhis alithinos

    drosero korifeos mama

    omorfos gimnostithi'
  replies: []
- id: 3514
  author: edrowland
  date: '2008-08-28T10:33:17'
  content: 'Multimedia scheduling is a great application for coroutines or continuations. A good example of a language that exploits coroutines is the CHuCK programming language.

    An example of a use of coroutines would be:

    ~ { // create a new "shred"/fiber/coroutine stack

    PlayNote(C);

    now += 1.5; // advance the scheduler 1.5 beats.

    PlayNote(EFlat);

    now += 0.5; // advance the scheduler 0.5 betas.

    }

    ~ {

    PlayNote(E);

    now += 1.0; // advance the scheduler 1 beat.

    PlayNote(D);

    now += 1.0;

    PlayNote(C);

    }

    In the intended implementation, the the now property set method would capture the execution stack, and push a delegate into a priority queue for later execution.

    A more modest implementation, requiring continuations, but not full coroutine implementation would be:

    ~ { // start closure of outer variables

    PlayNote(CSharp);

    // language extension that calls

    // Scheduler.At(double time, Action resumeDelegate);

    // where invocation of resumeDelegate

    // continues execution on the following

    // statement.

    yield Scheduler@ now + 1.5;

    // (or yeild now+1.5), which executes  this.At(time, delegate);'
  replies: []
---

Don Box offered a few answers to my questions in his [latest post](http://pluralsight.com/blogs/dbox/archive/2005/04/23/7682.aspx), but I am still unsatisfied.  Here's why.

First of all, the various comments on our respective blog entries taught me that C# doesn't really support continuations, which explains the awkward ` return yield` syntax.  This particular C# feature is probably closer to generators, which are themselves a more restricted form of closures (but still more useful than anything we have in Java).

Don's answer to the question "how useful are continuations?" is the following:

> I've been programming in C# 2.0 for over a year now. I regularly find myself using the following two pre-defined delegates from mscorlib in my programs:  
> 
>     
>     
>     namespace System {
>     public delegate bool Predicate<T>(T item);
>     public delegate void Action<T>(T item);
>     }
>     

I am quite puzzled by this code snippet which doesn't seem to have much to do with continuations.  Don's remaining text is a pretty convincing argument of the usefulness of delegates in C#, something I am in full agreement with.  Years ago, when Microsoft came up with its own JVM and IDE, my fondness for delegates was immediate.  They appeared to me as a typesafe and reasonably object-oriented way to provide method callbacks.

Back then, I spent hours on emails and discussions trying to convince Java developers around me (including at JavaSoft, and more particularly on the Swing team) that we should have delegates in Java.  But my words fell on deaf ears, creating cascades of flame wars that never accomplished anything.  The problem was, of course, that the reactions were clouded by politics and not driven by pragmatism.  So Java drifted away from delegates and will probably never recover.  This is quite sad and probably the cause for thousands of wasted objects every day as we create and destroy interfaces for every click of a button.

Anyway.

Don shows a pretty good example of predicates and first-order logic that allows him to neatly isolate logic between callers and callees. It's a fairly common idiom that you also find in many places in Java (comparators, file filters, etc...).  If you are not familiar with this kind of trick, I strongly encourage you to read up on the [STL](http://www.sgi.com/tech/stl/) (Standard Template Library) which, even though it is written in C++ and makes heavy use of advanced template techniques, contains a lot of very important concepts that you will undoubtedly find useful in your daily Java programming.

So I'm back to my original question:  how useful are continuations, really?  I can't shake off the idea that they are nothing more than a glorified way to do `goto`.  A cleaner way, sure, since it remembers contexts and frames, but I am still looking for this one example where a continuation-based code is more readable than a loop-based one.

Will anyone take up the challenge?
