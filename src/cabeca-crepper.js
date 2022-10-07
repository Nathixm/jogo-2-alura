function cabecaCrepper() {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    // cabeça
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(0,50,350,300);

     // olhos
    pincel.fillStyle = 'black';
    pincel.fillRect(50, 110, 90, 90);
    pincel.fillRect(210, 110, 90, 90);

    // nariz
    pincel.fillRect(140, 200, 70, 100);

    // boca ou barba
    pincel.fillRect(100, 240, 40, 110);
    pincel.fillRect(210, 240, 40, 110);    
}
