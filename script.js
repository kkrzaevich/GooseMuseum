// Get number of images

let img_amount = document.querySelectorAll('#carousel-center img').length;
console.log(img_amount);

// Function: swap images and text on right scroll

function image_swap_right() {

    // Get visible image and text

    let vis_img = document.getElementsByClassName('carousel-center-img');
    let vis_text = document.getElementsByClassName('carousel-center-text');

    // Get visible image ID

    let vis_img_id = vis_img[0].id;

    // Get last number of ID

    let vis_img_id_number = vis_img_id.slice(19);

    // Hide visible image and text

    vis_img[0].className = 'carousel-center-img-hidden';
    vis_text[0].className = 'carousel-center-text-hidden';

    // Get new active id number

    let active_img_id;
    let active_text_id;
    if (vis_img_id_number >= img_amount) {
        active_img_id = "carousel-center-img" + "1";
        active_text_id = "carousel-center-text" + "1";
    }
    else {
        active_img_id = "carousel-center-img" + (parseInt(vis_img_id_number)+1);
        active_text_id = "carousel-center-text" + (parseInt(vis_img_id_number)+1);
    }

    // Change class for new image and text

    let active_img = document.getElementById(active_img_id);
    active_img.className = "carousel-center-img";
    let active_text = document.getElementById(active_text_id);
    active_text.className = "carousel-center-text";

}

// Function: swap images and text on left scroll

function image_swap_left() {

    // Get visible image and text

    let vis_img = document.getElementsByClassName('carousel-center-img');
    let vis_text = document.getElementsByClassName('carousel-center-text');

    // Get visible image ID

    let vis_img_id = vis_img[0].id;

    // Get last number of ID

    let vis_img_id_number = vis_img_id.slice(19);

    // Hide visible image and text

    vis_img[0].className = 'carousel-center-img-hidden';
    vis_text[0].className = 'carousel-center-text-hidden';

    // Get new active id number

    let active_img_id;
    let active_text_id;
    if (vis_img_id_number <= '1') {
        active_img_id = "carousel-center-img" + img_amount.toString();
        active_text_id = "carousel-center-text" + img_amount.toString();
    }
    else {
        active_img_id = "carousel-center-img" + (parseInt(vis_img_id_number)-1);
        active_text_id = "carousel-center-text" + (parseInt(vis_img_id_number)-1);
    }

    // Change class for new image and text

    let active_img = document.getElementById(active_img_id);
    active_img.className = "carousel-center-img";
    let active_text = document.getElementById(active_text_id);
    active_text.className = "carousel-center-text";

}



