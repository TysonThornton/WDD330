const toggleMenu = () => //modern alt for - function toggleMenu() 
{
    document.querySelector('#navigation').classList.toggle('open');
}

document.querySelector('#menu').addEventListener('click', toggleMenu);