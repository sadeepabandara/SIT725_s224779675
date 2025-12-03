const addCards = (items) => {
    items.forEach((item) => {
        const cardHtml = `
      <div class="col s12 m4">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}" alt="${item.title}" style="height:200px; width:100%; object-fit:cover;">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
            <p><a href="/api/plants/${item.id}">View details</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
            <p>${item.description}</p>
          </div>
        </div>
      </div>
    `;
        $('#card-section').append(cardHtml);
    });
};

const loadPlants = async () => {
    try {
        const res = await fetch('/api/plants');
        const data = await res.json();
        addCards(data);
    } catch (err) {
        console.error('Failed to fetch plants', err);
    }
};

const submitForm = () => {
    const title = $('#p_title').val();
    const image = $('#p_image').val();
    const desc = $('#p_desc').val();
    // Demo: just log — real app would POST to server
    console.log({ title, image, desc });
    M.toast({ html: 'Submitted (demo). Check console.' });
};

$(document).ready(function () {
    $('.modal').modal();
    loadPlants();
    $('#formSubmit').click(() => submitForm());
});
