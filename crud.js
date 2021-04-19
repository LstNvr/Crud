const cars = [
    {
        trademark: "Volkswagen",
        model: "Jetta",
        color: "Negro",
        year: "2021",
        price: "$ 459,990",
        image: "https://www.vw.com/es/sds7d1/dscene7/is/image/volkswagen/VW_NGW6_SpringSales_2021_Homepage_ACS?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9ODAwJmhlaT04MDAmYWxpZ249MC4wMCwwLjAwJmEzZWU="
    },
    {
        trademark: "Chevrolet",
        model: "Silverado",
        color: "Gris",
        year: "2021",
        price: "$ 641,000",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/2019_Chevrolet_Camaro_base%2C_front_11.9.19.jpg"
    },
    {
        trademark: "Ford",
        model: "Escape",
        color: "Azúl",
        year: "2020",
        price: "$ 708,800",
        image: "https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150/2021/collections/dm/21_426bf1c_v1.tif?croppathe=1_3x2&wid=900"
    },
    {
        trademark: "Renault",
        model: "Kwid",
        color: "Blanco",
        year: "2021",
        price: "$ 187,100",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/renault-morphoz-2-1605524886.jpeg?crop=0.885xw:0.663xh;0.0385xw,0.260xh&resize=1200:*"
    },
];
const edit = false;
function printUsers(data_cars) {
    const container = document.getElementById('cars-container');
    container.innerHTML = '';
    data_cars.forEach((cars) => {
        const htmlUser = `<tr>
                            <td>${cars.trademark}</td>
                            <td>${cars.model}</td>
                            <td>${cars.color}</td>
                            <td>${cars.year}</td>
                            <td>${cars.price}</td>
                            <td><img src="${cars.image}" width= "100px" heigth= "100px"></td>
                                <button class="btn btn-danger" onclick="deleteUser(${cars.id})">Eliminar</button>
                                <button class="btn btn-warning" onclick="editUser(${cars.id})">Editar</button>
                            </td>
                        </tr>`;
        container.innerHTML += htmlUser;
    });
}
const EDIT = 'edit';
const CREATE = 'create';
function addUser() {
    const carTrademark = document.getElementById('trademark').value;
    const carModel= document.getElementById('model').value;
    const carColor = document.getElementById('color').value;
    const carPrice = document.getElementById('year').value;
    const carYear = document.getElementById('price').value;
    const carImage = document.getElementById('image').value;
    const newCar = {
        id: generateId(),
        trademark: carTrademark,
        model: carModel,
        color: carColor,
        year: carYear,
        price: carPrice,
        image: carImage
    }

    cars.push(newCar);
    printUsers(cars);
    resetForm();
    HideFormContainer();
}

function generateId() {
    let biggerId = 0;
    users.forEach((cars) => {
        if(cars.id > biggerId) {
            biggerId = cars.id;
        }
    });
    return biggerId += 1;
}

function deleteUser(id) {
    const index = cars.findIndex((cars) => cars.id === id);
    cars.splice(index, 1);
    printUsers(cars);
}

function editUser(id) {
    const index = cars.findIndex((cars) => cars.id === id);
    const car = cars[index];
    document.getElementById('trademark').value = cars.trademark;
    document.getElementById('model').value = cars.model;
    document.getElementById('color').value = cars.color;
    document.getElementById('year').value = cars.year;
    document.getElementById('price').value = cars.price;
    document.getElementById('price').value = cars.image;
    showFormContainer();
    changeEditbutton();
}

function resetForm() {
    document.getElementById('user-form').reset();
}

function HideFormContainer() {
    document.getElementById('create-user-container').classList.add('d-none');
}

function showFormContainer() {
    document.getElementById('create-user-container').classList.remove('d-none');
    changeCreatebutton();
}

function changeEditbutton() {
    const button = getFormUserButton();
    button.innerHTML = 'Editar'
    button.classList.remove('btn-primary');
    button.classList.add('btn-warning');
    button.value = EDIT;
}

function changeCreatebutton() {
    const button = getFormUserButton();
    button.innerHTML = 'Guardar'
    button.classList.add('btn-primary');
    button.classList.remove('btn-warning');
    button.value = CREATE;
}

function user() {
    const buttonValue = getFormUserButton().value
    if(buttonValue === EDIT){
        alert('Editamos')
    } else {
        addUser();
    }
}

function getFormUserButton() {
    return document.getElementById('btn-user-form');
}

printUsers(cars);