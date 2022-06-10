const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')
c.imageSmoothingEnabled = false;

const gatinhos_sprite = document.getElementById('gatinhos-sprite')
const asas_sprite = document.getElementById('asas-sprite')

let gatinho_cont = 0
let asa_cont = 0

c.drawImage(gatinhos_sprite, 32 * gatinho_cont, 0, 32, 32, 0, 0, 600, 600)
c.drawImage(asas_sprite, 32 * asa_cont, 0, 32, 32, 0, 0, 600, 600)

function gatinhoRight() {
    if (gatinho_cont > 14) {
        gatinho_cont = 0
        c.drawImage(gatinhos_sprite, 32 * gatinho_cont, 0, 32, 32, 0, 0, 600, 600)
        c.drawImage(asas_sprite, 32 * asa_cont, 0, 32, 32, 0, 0, 600, 600)
    }
    else {
        gatinho_cont += 1
        c.drawImage(gatinhos_sprite, 32 * gatinho_cont, 0, 32, 32, 0, 0, 600, 600)
        c.drawImage(asas_sprite, 32 * asa_cont, 0, 32, 32, 0, 0, 600, 600)
    }
}

function gatinhoLeft() {
    if (gatinho_cont < 0) {
        gatinho_cont = 14
        c.drawImage(gatinhos_sprite, 32 * gatinho_cont, 0, 32, 32, 0, 0, 600, 600)
        c.drawImage(asas_sprite, 32 * asa_cont, 0, 32, 32, 0, 0, 600, 600)
    }
    else {
        gatinho_cont -= 1
        c.drawImage(gatinhos_sprite, 32 * gatinho_cont, 0, 32, 32, 0, 0, 600, 600)
        c.drawImage(asas_sprite, 32 * asa_cont, 0, 32, 32, 0, 0, 600, 600)
    }
}


function asaRight() {
    if (asa_cont > 14) {
        asa_cont = 0
        c.drawImage(gatinhos_sprite, 32 * gatinho_cont, 0, 32, 32, 0, 0, 600, 600)
        c.drawImage(asas_sprite, 32 * asa_cont, 0, 32, 32, 0, 0, 600, 600)
    }
    else {
        asa_cont += 1
        c.drawImage(gatinhos_sprite, 32 * gatinho_cont, 0, 32, 32, 0, 0, 600, 600)
        c.drawImage(asas_sprite, 32 * asa_cont, 0, 32, 32, 0, 0, 600, 600)
    }
}

function asaLeft() {
    if (asa_cont < 0) {
        asa_cont = 14
        c.drawImage(gatinhos_sprite, 32 * gatinho_cont, 0, 32, 32, 0, 0, 600, 600)
        c.drawImage(asas_sprite, 32 * asa_cont, 0, 32, 32, 0, 0, 600, 600)
    }
    else {
        asa_cont -= 1
        c.drawImage(gatinhos_sprite, 32 * gatinho_cont, 0, 32, 32, 0, 0, 600, 600)
        c.drawImage(asas_sprite, 32 * asa_cont, 0, 32, 32, 0, 0, 600, 600)
    }
}