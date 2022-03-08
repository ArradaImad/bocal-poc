const ProducteurSchema = require('../models/producteurs');
// const PRODUCTEURS = [
//     {
//         "id": 1,
//         "name": "Browsedrive",
//         "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
//         "email": "gkingscote0@yellowbook.com",
//         "phone": "+54 266 585 7291",
//         "address": "6 Dennis Terrace",
//         "location": { type: 'Point', coordinates: [45.18430376782165, 5.735535482324243] }
//     },
//     {
//         "id": 2,
//         "name": "Topicware",
//         "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
//         "email": "aredshaw1@over-blog.com",
//         "phone": "+7 167 747 3025",
//         "address": "145 Gateway Terrace",
//         "location": { type: 'Point', coordinates: [45.82165, 5.24243] }
//     }, {
//         "id": 3,
//         "name": "Mita",
//         "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
//         "email": "rhonywill2@howstuffworks.com",
//         "phone": "+86 425 150 2414",
//         "address": "36882 Rigney Junction",
//         "location": { type: 'Point', coordinates: [46.165, 5.482324243] }
//     }, {
//         "id": 4,
//         "name": "Ntags",
//         "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id Nulla ultrices aliquet.",
//         "email": "pberlin3@microsoft.com",
//         "phone": "+86 323 139 1254",
//         "address": "1722 Golf View Road",
//         "location": { type: 'Point', coordinates: [44.82165, 4.974243] }
//     }, {
//         "id": 5,
//         "name": "Dynazzy",
//         "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
//         "email": "tibotson4@harvard.edu",
//         "phone": "+62 439 521 4546",
//         "address": "00984 Vernon Park",
//         "location": { type: 'Point', coordinates: [46.232192999999995, 2.209666999999996] }
//     }, {
//         "id": 6,
//         "name": "LiveZ",
//         "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
//         "email": "tsara5@comcast.net",
//         "phone": "+62 671 534 8655",
//         "address": "712 Redwing Plaza",
//         "location": { type: 'Point', coordinates: [44.85075154124254, -0.5660621567096902] }
//     }, {
//         "id": 7,
//         "name": "Meetz",
//         "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
//         "email": "atwaits6@zdnet.com",
//         "phone": "+351 367 647 1980",
//         "address": "32882 Redwing Point",
//         "location": { type: 'Point', coordinates: [43.602391006314285, 1.4389427261028098] }
//     }, {
//         "id": 8,
//         "name": "Fliptune",
//         "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
//         "email": "dtibalt7@hugedomains.com",
//         "phone": "+380 226 293 6436",
//         "address": "89564 Bultman Court",
//         "location": { type: 'Point', coordinates: [43.35064129254767, 3.20774155422781] }
//     }, {
//         "id": 9,
//         "name": "Yacero",
//         "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
//         "email": "eclunan8@jalbum.net",
//         "phone": "+55 473 857 1613",
//         "address": "11 Maryland Alley",
//         "location": { type: 'Point', coordinates: [43.19234281939738, 2.99625473782156] }
//     }, {
//         "id": 10,
//         "name": "Aimbo",
//         "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
//         "email": "twilliscroft9@amazon.de",
//         "phone": "+45 738 825 2363",
//         "address": "05029 Ramsey Trail",
//         "location": { type: 'Point', coordinates: [42.69542545471037, 2.90012436672781] }
//     }, {
//         "id": 11,
//         "name": "Photospace",
//         "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
//         "email": "kcheyneya@yellowbook.com",
//         "phone": "+55 520 595 2517",
//         "address": "7 Fallview Road",
//         "location": { type: 'Point', coordinates: [43.40759777928831, 3.68839340969656] }
//     }, {
//         "id": 12,
//         "name": "Skipfire",
//         "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam Nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
//         "email": "jchaplainb@tinyurl.com",
//         "phone": "+420 711 587 4599",
//         "address": "817 Union Pass",
//         "location": { type: 'Point', coordinates: [43.61245906300955, 3.87790756985281] }
//     }, {
//         "id": 13,
//         "name": "Gigashots",
//         "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
//         "email": "cdellenbrokc@techcrunch.com",
//         "phone": "+86 685 177 5157",
//         "address": "9 Milwaukee Place",
//         "location": { type: 'Point', coordinates: [43.30712371310266, 5.36380844875906] }
//     }, {
//         "id": 14,
//         "name": "Voonder",
//         "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
//         "email": "kraigattd@barnesandnoble.com",
//         "phone": "+86 906 842 5622",
//         "address": "502 Saint Paul Court",
//         "location": { type: 'Point', coordinates: [43.12867012248884, 6.13010483547781] }
//     }, {
//         "id": 15,
//         "name": "Dabtype",
//         "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
//         "email": "kjoselsone@engadget.com",
//         "phone": "+234 205 639 7922",
//         "address": "06 Ramsey Parkway",
//         "location": { type: 'Point', coordinates: [43.43826846526961, 6.73709946438406] }
//     }, {
//         "id": 16,
//         "name": "Linkbuzz",
//         "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
//         "email": "bramef@goo.gl",
//         "phone": "+62 614 335 6625",
//         "address": "936 Clarendon Hill",
//         "location": { type: 'Point', coordinates: [43.85333922394738, 6.50363999172781] }
//     }, {
//         "id": 17,
//         "name": "Mudo",
//         "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
//         "email": "nkeitleyg@pagesperso-orange.fr",
//         "phone": "+98 978 534 0755",
//         "address": "486 Lawn Terrace",
//         "location": { type: 'Point', coordinates: [43.831239027615574, 5.78128891750906] }
//     }, {
//         "id": 18,
//         "name": "Divanoodle",
//         "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
//         "email": "aivashkinh@springer.com",
//         "phone": "+1 870 715 7236",
//         "address": "3 Grim Trail",
//         "location": { type: 'Point', coordinates: [44.56930835113663, 6.06968003079031] }
//     }, {
//         "id": 19,
//         "name": "Browsedrive",
//         "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
//         "email": "fharcusi@squidoo.com",
//         "phone": "+381 501 993 7869",
//         "address": "62612 West Circle",
//         "location": { type: 'Point', coordinates: [43.953337588831616, 4.80350571438406] }
//     }, {
//         "id": 20,
//         "name": "Flashspan",
//         "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
//         "email": "labsolemj@arizona.edu",
//         "phone": "+33 403 234 4556",
//         "address": "06858 Westerfield Street",
//         "location": { type: 'Point', coordinates: [43.78075552092923, 6.19052964016531] }
//     }, {
//         "id": 21,
//         "name": "Zooveo",
//         "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
//         "email": "frubinovitschk@time.com",
//         "phone": "+86 288 609 5464",
//         "address": "1 Judy Drive",
//         "location": { type: 'Point', coordinates: [43.70305778524669, 7.27542954250906] }
//     }, {
//         "id": 22,
//         "name": "Divanoodle",
//         "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
//         "email": "ccornilsl@de.vu",
//         "phone": "+63 259 387 5003",
//         "address": "8732 Nelson Hill",
//         "location": { type: 'Point', coordinates: [47.33241837236705, 5.03696518704031] }
//     }, {
//         "id": 23,
//         "name": "Buzzdog",
//         "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
//         "email": "jedardsm@photobucket.com",
//         "phone": "+62 803 869 5931",
//         "address": "28326 Sutherland Point",
//         "location": { type: 'Point', coordinates: [48.69350423764471, 6.18228989407156] }
//     }, {
//         "id": 24,
//         "name": "Jabbersphere",
//         "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam Nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
//         "email": "telionn@webmd.com",
//         "phone": "+86 434 182 2393",
//         "address": "1 Sunfield Alley",
//         "location": { type: 'Point', coordinates: [49.128257607604496, 6.16855698391531] }
//     }, {
//         "id": 25,
//         "name": "Eidel",
//         "description": "Nam ultrices, libero non mattis pulvinar, Nulla pede ullamcorper augue, a suscipit Nulla elit ac Nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
//         "email": "afyfieldo@wisc.edu",
//         "phone": "+7 607 402 2914",
//         "address": "3 Birchwood Place",
//         "location": { type: 'Point', coordinates: [48.57313725995856, 7.75882798000906] }
//     }
// ]



const PRODUCTEURS = [
    {
        "id": 1,
        "name": "Browsedrive",
        "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        "email": "gkingscote0@yellowbook.com",
        "phone": "+54 266 585 7291",
        "address": "6 Dennis Terrace",
        "location": { type: 'Point', coordinates: [5.735535482324243, 45.18430376782165]}
    }, 
    {
        "id": 2,
        "name": "Topicware",
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "email": "aredshaw1@over-blog.com",
        "phone": "+7 167 747 3025",
        "address": "145 Gateway Terrace",
        "location": { type: 'Point', coordinates: [5.24243, 45.82165]}
    }, {
        "id": 3,
        "name": "Mita",
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "email": "rhonywill2@howstuffworks.com",
        "phone": "+86 425 150 2414",
        "address": "36882 Rigney Junction",
        "location": { type: 'Point', coordinates: [5.482324243, 46.165]}
    }, {
        "id": 4,
        "name": "Ntags",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id Nulla ultrices aliquet.",
        "email": "pberlin3@microsoft.com",
        "phone": "+86 323 139 1254",
        "address": "1722 Golf View Road",
        "location": { type: 'Point', coordinates: [4.974243, 44.82165]}
    }, {
        "id": 5,
        "name": "Dynazzy",
        "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "email": "tibotson4@harvard.edu",
        "phone": "+62 439 521 4546",
        "address": "00984 Vernon Park",
        "location": { type: 'Point', coordinates: [2.209666999999996, 46.232192999999995]}
    }, {
        "id": 6,
        "name": "LiveZ",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "email": "tsara5@comcast.net",
        "phone": "+62 671 534 8655",
        "address": "712 Redwing Plaza",
        "location": { type: 'Point', coordinates: [44.8507515412425, 4.5660621567096902]}
    }, {
        "id": 7,
        "name": "Meetz",
        "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "email": "atwaits6@zdnet.com",
        "phone": "+351 367 647 1980",
        "address": "32882 Redwing Point",
        "location": { type: 'Point', coordinates: [1.4389427261028098, 43.602391006314285]}
    }, {
        "id": 8,
        "name": "Fliptune",
        "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "email": "dtibalt7@hugedomains.com",
        "phone": "+380 226 293 6436",
        "address": "89564 Bultman Court",
        "location": { type: 'Point', coordinates: [3.20774155422781, 43.35064129254767]}
    }, {
        "id": 9,
        "name": "Yacero",
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "email": "eclunan8@jalbum.net",
        "phone": "+55 473 857 1613",
        "address": "11 Maryland Alley",
        "location": { type: 'Point', coordinates: [2.99625473782156, 43.19234281939738]}
    }, {
        "id": 10,
        "name": "Aimbo",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "email": "twilliscroft9@amazon.de",
        "phone": "+45 738 825 2363",
        "address": "05029 Ramsey Trail",
        "location": { type: 'Point', coordinates: [2.90012436672781, 42.69542545471037]}
    }, {
        "id": 11,
        "name": "Photospace",
        "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "email": "kcheyneya@yellowbook.com",
        "phone": "+55 520 595 2517",
        "address": "7 Fallview Road",
        "location": { type: 'Point', coordinates: [3.68839340969656, 43.40759777928831]}
    }, {
        "id": 12,
        "name": "Skipfire",
        "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam Nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "email": "jchaplainb@tinyurl.com",
        "phone": "+420 711 587 4599",
        "address": "817 Union Pass",
        "location": { type: 'Point', coordinates: [3.87790756985281, 43.61245906300955]}
    }, {
        "id": 13,
        "name": "Gigashots",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "email": "cdellenbrokc@techcrunch.com",
        "phone": "+86 685 177 5157",
        "address": "9 Milwaukee Place",
        "location": { type: 'Point', coordinates: [5.36380844875906, 43.30712371310266]}
    }, {
        "id": 14,
        "name": "Voonder",
        "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "email": "kraigattd@barnesandnoble.com",
        "phone": "+86 906 842 5622",
        "address": "502 Saint Paul Court",
        "location": { type: 'Point', coordinates: [6.13010483547781, 43.12867012248884]}
    }, {
        "id": 15,
        "name": "Dabtype",
        "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        "email": "kjoselsone@engadget.com",
        "phone": "+234 205 639 7922",
        "address": "06 Ramsey Parkway",
        "location": { type: 'Point', coordinates: [6.73709946438406, 43.43826846526961]}
    }, {
        "id": 16,
        "name": "Linkbuzz",
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "email": "bramef@goo.gl",
        "phone": "+62 614 335 6625",
        "address": "936 Clarendon Hill",
        "location": { type: 'Point', coordinates: [6.50363999172781, 43.85333922394738]}
    }, {
        "id": 17,
        "name": "Mudo",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "email": "nkeitleyg@pagesperso-orange.fr",
        "phone": "+98 978 534 0755",
        "address": "486 Lawn Terrace",
        "location": { type: 'Point', coordinates: [5.78128891750906, 43.831239027615574]}
    }, {
        "id": 18,
        "name": "Divanoodle",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "email": "aivashkinh@springer.com",
        "phone": "+1 870 715 7236",
        "address": "3 Grim Trail",
        "location": { type: 'Point', coordinates: [6.06968003079031, 44.56930835113663]}
    }, {
        "id": 19,
        "name": "Browsedrive",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "email": "fharcusi@squidoo.com",
        "phone": "+381 501 993 7869",
        "address": "62612 West Circle",
        "location": { type: 'Point', coordinates: [4.80350571438406, 43.953337588831616]}
    }, {
        "id": 20,
        "name": "Flashspan",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        "email": "labsolemj@arizona.edu",
        "phone": "+33 403 234 4556",
        "address": "06858 Westerfield Street",
        "location": { type: 'Point', coordinates: [6.19052964016531, 43.78075552092923]}
    }, {
        "id": 21,
        "name": "Zooveo",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "email": "frubinovitschk@time.com",
        "phone": "+86 288 609 5464",
        "address": "1 Judy Drive",
        "location": { type: 'Point', coordinates: [7.27542954250906, 43.70305778524669]}
    }, {
        "id": 22,
        "name": "Divanoodle",
        "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "email": "ccornilsl@de.vu",
        "phone": "+63 259 387 5003",
        "address": "8732 Nelson Hill",
        "location": { type: 'Point', coordinates: [5.03696518704031, 47.33241837236705]}
    }, {
        "id": 23,
        "name": "Buzzdog",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        "email": "jedardsm@photobucket.com",
        "phone": "+62 803 869 5931",
        "address": "28326 Sutherland Point",
        "location": { type: 'Point', coordinates: [6.18228989407156, 48.69350423764471]}
    }, {
        "id": 24,
        "name": "Jabbersphere",
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam Nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "email": "telionn@webmd.com",
        "phone": "+86 434 182 2393",
        "address": "1 Sunfield Alley",
        "location": { type: 'Point', coordinates: [6.16855698391531, 49.128257607604496]}
    }, {
        "id": 25,
        "name": "Eidel",
        "description": "Nam ultrices, libero non mattis pulvinar, Nulla pede ullamcorper augue, a suscipit Nulla elit ac Nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "email": "afyfieldo@wisc.edu",
        "phone": "+7 607 402 2914",
        "address": "3 Birchwood Place",
        "location": { type: 'Point', coordinates: [7.75882798000906, 48.57313725995856]}
    }
]



const searchController = {

    searchAround: async (req, res) => {
        try {
            /*
            // Find par proximité mais sans distance            
            let producteurs = await ProducteurSchema.find({
                location:
                  { $near :
                     {
                       $geometry: { type: "Point",  coordinates: [ req.query.lat, req.query.lon ] },
                       $maxDistance: 200000
                     }
                  }
              });
            */

            let distance = await ProducteurSchema.aggregate([
                {
                    $geoNear: {
                        near: {
                            $geometry: {
                                type: "Point",
                                coordinates: [Number(req.query.lat), Number(req.query.lon)],
                            }
                        },
                        // maxDistance: 500000,
                        // spherical: true,
                        // // distanceMultiplier: 0.000621371
                        distanceField: "distance",
                    }
                }
            ])
            if (!!distance) {
                res.status(200).json({ ok: true, producteurs: distance });
            }
        } catch (error) {
            console.error(error);
        }
    },

    addProducteurs: (req, res) => {
        try {
            ProducteurSchema.insertMany(PRODUCTEURS)
                .then(() => res.status(201).json({ ok: true, message: "succes" }))
                .catch((error) => res.status(400).json({ ok: false, message: "Error creating producteurs", error: error }));

        } catch (error) {
            console.error(error);
        }
    },
}

module.exports = searchController;