import img from './hero.jpg'

function homePageLoad () {
    const main = document.createElement('div');
    const header1 = document.createElement('h1');
    header1.innerText = 'Ave Bistro';
    const header2 = document.createElement('h2');
    header2.innerText = 'Food Crafted With Perfection';

    const image = new Image();
    image.src = img;


    main.append(header1);
    main.append(header2);


    main.append(image);
    
    return main;
}

export default homePageLoad;