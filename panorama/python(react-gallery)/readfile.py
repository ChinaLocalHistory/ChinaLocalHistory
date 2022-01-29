import copy 
# Program to show various ways to  
# read data from a file.  
def readgallery(filename):
    # Creating a file 
    file1 = open(filename, "r+") 
      
    # readlines function  
    print("Output of Readlines function is ") 
    return(file1.readlines()) 
    file1.close()

def edittxt(txtList):
    newList = []
    for txt in txtList:
        txt=txt.strip("\n")
        txt=txt.replace(" ", "%20")
        newList.append(txt)
    return(newList)
            

def formatGallery(txtList,nameOfScene):
    print(nameOfScene)
    print('<div className="gallery-row">\n')
    
    for txt in txtList:
        print(' <div className="gallery-column">')
        print(' <img '+'id='+txt+' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/'
          + nameOfScene + '/' + txt + '" alt=' +txt + 'onClick={this.on.bind(this)}></img></div>')
    print('\n')
    print('<div className="back-button">\n'+
          '<p><b>&rarr;</b></p>\n'+
          '</div>\n</div>')
    print('\n')
    for txt in txtList:
        print('{\n"pitch": 1, \n'
             +'"yaw": 1, \n'
             +'"type": "info",\n'
             +'"clickHandlerFunc" : expandImg,\n'
             +'"clickHandlerArgs" : {"text":'+txt +'}\n'
             +'},')
       
formatGallery(edittxt(readgallery('gallery.txt')),'rear-hall')
