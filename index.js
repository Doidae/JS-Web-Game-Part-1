function newImage (imgName,fileLocation,posit,left,bottom){
    imgName = document.createElement('img')
    imgName.src = fileLocation
    imgName.style.position = posit
    imgName.style.left = left
    imgName.style.bottom = bottom
    document.body.append(imgName)
}

function newItem(loc,position,lef,bot){
        let sword = document.createElement('img')
    sword.src = loc
    sword.style.position = position
    sword.style.left = lef
    sword.style.bottom = bot
    document.body.append(sword)

sword.addEventListener('dblclick', function(){
    sword.remove()
})

}

let greenCharacter
let pineTree
let tree
let pillar
let crate
let well

let item = newItem('assets/sword.png','fixed','500px','405px')
let shield = newItem('assets/shield.png','fixed','165px','185px')
let staff = newItem('assets/staff.png','fixed','600px','100px')


newImage(greenCharacter,'assets/green-character.gif','fixed','100px','100px')
newImage(pineTree,'assets/pine-tree.png','fixed','450px','200px')
newImage(tree,'assets/tree.png','fixed','200px','300px')
newImage(pillar,'assets/pillar.png','fixed','350px','100px')
newImage(crate,'assets/crate.png','fixed','150px','200px')
newImage(well,'assets/well.png','fixed','500px','425px')

