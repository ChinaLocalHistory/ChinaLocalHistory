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
        print(' <img '+'id='+txt+' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/'
          + nameOfScene + '/' + txt + '" alt="' +txt + '" onClick={this.on.bind(this)}></img></div>')
    print('\n')
    print('<div className="back-button">\n'+
          '<p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Zhiyan/menu/zhiyan.html">&rarr;</a></b></p>'+
          '</div>\n</div>')
    print('\n')
    for txt in txtList:
        print('{\n"pitch": 1, \n'
             +'"yaw": 1, \n'
             +'"type": "info",\n'
             +'"clickHandlerFunc" : expandImg,\n'
             +'"clickHandlerArgs" : {"text":"'+txt +'"}\n'
             +'},')
        

def galleryHtml(txtList,nameOfScene):
    n = 1
    for txt in txtList:
        print('<div class="mySlides">')
        print('<div class="numbertext">' + str(n) +' / 4</div>')
        print('<img src="'+ 'https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/'
          + nameOfScene + '/' + txt + '" alt="' +txt + '" style="width:100%">'+
              '</div>')
        n+=1
        print()
        
def galleryHtml2(txtList,nameOfScene):
    print("nest part")
    x = 1
    for txt in txtList:
        print('<div class="column">')
        print('<img class="demo cursor"'+' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/'
          + nameOfScene + '/' + txt + '" style="width:100%" onclick="currentSlide(' + str(x) + ') ' + '" alt="' +txt +'"></div>')
        x+=1
        print()



        
#formatGallery(edittxt(readgallery('gallery.txt')),'J%20Inside%20the%20village-J.3%20Villagers/')
galleryHtml(edittxt(readgallery('gallery.txt')),'J%20Inside%20the%20village-J.7%20Countyard')
galleryHtml2(edittxt(readgallery('gallery.txt')),'J%20Inside%20the%20village-J.7%20Countyard')
