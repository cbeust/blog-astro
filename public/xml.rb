#!/usr/local/bin/ruby

# An object of this class will turn any invocation of a
# non-existing method into an XML tag.  It will close and 
# indent tags automatically and closures can be used on
# any of these methods to add more business logic.
# Additionally, a Hash can be supplied in any parameter of
# the XML tag, and it will be turned into XML attributes.
# 
# Sample use:
#       xml = XML.new
#       xml.body {
#         xml.table{
#           xml.tr {
#             xml.td({ "valign" => "top" }) {
#               xml.append(v.createLeftSideReport)
#             }
#             xml.td("Another way to add text")
#           }
#         }
#       }
#
#       puts xml.to_xml
# 
# Cedric Beust
# September 3rd, 2003

class XML
  def initialize
    @buffer = ""
    @current_indentation = 0
    @indentation = 2
  end

  def indent
    result = ""
    [0...@current_indentation].each {
      result << " "
    }

    result
  end

  def method_missing(id, *args)
    attributes = Hash.new
    content = nil

    #
    # See if were given a set of attributes or
    # content to insert in the tag
    #
    args.each { |arg|
      if arg.kind_of?(Hash)
        attributes = arg
      else
        content = arg
      end
    }

    #
    # Open the tag, possibly with attributes
    #
    @buffer << indent << "<" << id.to_s
    attributes.each { |k, v|
      @buffer << " " << k.to_s << "=\"" << v << "\""
    }
    @buffer << ">"

    #
    # Populate the tag
    #
    if content != nil
      @buffer << content
    else
      @buffer << "\n"
      @current_indentation += @indentation
      yield
      @current_indentation -= @indentation
      @buffer << indent
    end

    #
    # Close the tag
    #
    @buffer << "</" << id.to_s << ">\n"
  end

  def append(s)
    @buffer << indent << s << "\n"
  end

  def to_xml
    @buffer
  end
end


