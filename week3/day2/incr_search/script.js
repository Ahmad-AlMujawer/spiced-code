(function (countries) {
    // 1.input event
    var searchInput = $("input");
    var resultsContainer = $(".results_container");

    // console.log(countries);

    searchInput.on("input", function () {
        // console.log("inputing");
        // console.log(countries[i]);
        var userInput = searchInput.val().toLowerCase();
        var matches = [];
        if (userInput.length === 0) {
            // IF the input fiels is empty don't show any results
            console.log("the input field is empty don't show any results");
            resultsContainer.hide();
        } else {
            resultsContainer.show();
        }

        for (var i = 0; i < countries.length; i++) {
            // console.log("matches", matches);
            if (countries[i].toLowerCase().indexOf(userInput) === 0) {
                // console.log(countries[i]);
                matches.push(countries[i]);

                if (matches.length === 4) {
                    // console.log("no more than four");
                    break;
                }
                console.log(matches);
            }
        }

        var htmlForCountries = "";

        for (var j = 0; j < matches.length; j++) {
            htmlForCountries += '<p class="country">' + matches[j] + "</p>";
        }

        if (matches.length === 0) {
            var typo = "";
            typo += '<p class="country">no result!</p>';
            resultsContainer.html(typo);
        } else {
            resultsContainer.html(htmlForCountries);
        }
    });
    // 2.mouseover event
    $(".results_container")
        .mouseover(function (e) {
            $(e.target).addClass("highlight");
            $(".results_container").removeClass("highlight");
            e.stopPropagation();
            // console.log("mouseover");
        })
        .mouseout(function (e) {
            e.stopPropagation();
            $(e.target).removeClass("highlight");
            $(".results_container").removeClass("highlight");

            // console.log("mouseout");
        });

    // $(".results_container").on("mouseout", "mouseover", "p", function (e) {
    //     console.log("delegation");
    //     e.preventDefault();
    // });

    // 3.mousedown event
    var choice;
    resultsContainer.click(function (e) {
        // console.log("clicking is working");
        choice = $(e.target).html();
        if (searchInput.val(choice)) {
            resultsContainer.hide();
        } //else if (e.target.innerHTML !== "no result!");
    });

    // $("body").keydown(function (e) {
    //     var country = $(".country");
    //     if (e.keyCode == 40) {
    //         console.log("Down arrow key hit.");
    //         $(".country").addClass("highlight");
    //     }
    //     for (var i = 0; i < country.length; i++) {
    //         if (country.eq(i).hasClass("highlight")) {
    //             country.eq(i).removeClass("highlight");
    //             country.eq(i).next().addClass("highlight");
    //         }
    //     }
    // });
    // $("body").keyup(function (e) {

    //     if (e.keyCode == 38) {
    //         console.log("Up arrow key hit.");
    //         $(".country").addClass("highlight");

    //     }
    // });

    searchInput.focus(function () {
        console.log("focusing");

        resultsContainer.show();
    });
    searchInput.blur(function () {
        console.log("blurring");

        resultsContainer.hide();
    });
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
