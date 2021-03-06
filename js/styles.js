var modalT = document.getElementById('open-modal-transferencia');
var modalC = document.getElementById('open-modal-correo');
var modalConfirm = document.getElementById('modal-transfer-confirm');
var body = document.getElementsByTagName('body');
function openModalTransferencia(ev) {
    ev.preventDefault();
    modalT.classList.add('openmodal');
    addClassBody();
}
function openModalcorreo(ev) {
    ev.preventDefault();
    modalC.classList.add('openmodal');
    addClassBody();
}
function openModalconfirmacion(ev) {
    ev.preventDefault();
    console.log(modalConfirm);  
    modalConfirm.classList.add('openmodal');
    addClassBody();
}
function closeModal(ev) {
    ev.preventDefault();
    modalConfirm.classList.remove('openmodal');
    modalT.classList.remove('openmodal');
    modalC.classList.remove('openmodal');
    body[0].classList.remove('modal-on');
}
function addClassBody(){
    body[0].classList.add('modal-on');
}
jQuery(document).ready(function($) {
    //Modales
    var windowWidth = $(window).width();
    if(windowWidth < 768){
        $('.menu-notifications > div').click(function(){
            var menuActive = $(this).attr('class').split(' ')[0];
            if($(this).hasClass('active')){
                $('.menu-notifications > div').removeClass('active');
                $('#'+menuActive+'-slide').css('visibility', 'hidden'); 
                $('#sub-menu-container').slideUp(400);
                $('.sub-menu').css('display', 'none');
            }else{
                $('.menu-notifications > div').removeClass('active');
                $('.sub-menu').css('visibility', 'hidden'); 
                $('#sub-menu-container').slideUp(400);
                $('.sub-menu').css('display', 'none');

                $(this).addClass('active');
                $('#'+menuActive+'-slide').css('display', 'flex'); 
                $('#sub-menu-container').slideDown(400, function() {
                    $('#'+menuActive+'-slide').css({
                        'visibility': 'visible',
                    });
                });
            };
            closeMenu(menuActive);
        });
        $('.menu-dashboard:not(#shortcuts) h3').click(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active').next().slideUp(400);
            }else{
                $('.menu-dashboard:not(#shortcuts) h3').removeClass('active').next().slideUp(400);
                $(this).addClass('active');
                $(this).next().slideDown(400);
            }
        });
        function closeMenu(menuActive){
            $(window).click(function() {
                $('.menu-notifications > div').removeClass('active');
                $('#'+menuActive+'-slide').css('visibility', 'hidden'); 
                $('#sub-menu-container').slideUp(400);
                $('.sub-menu').css('display', 'none');
            });
        }

        $('.menu-notifications > div').click(function(event){
            event.stopPropagation();
        });
    }
    $('#open-transaccion').click(function(e){
        e.preventDefault();
        if($(this).hasClass('active')){
            $('#transferir-correo').slideUp(400);
            $(this).removeClass('active');    
        }else{
            $('#transferir-correo').slideDown(400);
            $(this).addClass('active');
        }
    });

    $('*[data-modal]').click(function(event) {
        event.preventDefault();
        var idModal = $(this).data('modal');
        $('#'+idModal).addClass('openmodal');
        addClassBody();

    });
    $('*[data-close]').click(function(event) {
        event.preventDefault();
        $(this).closest('.openmodal').removeClass('openmodal');
        $('body').removeClass('modal-on');
    });
    $('.row-config a').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass().addClass('btn-continuar deactivate').html('Desactivado');
        }else{
            $(this).removeClass().addClass('btn-continuar active').html('<img src="img/dashboard/active-check.svg" /> Activado');
        }
    })
});