<script>
     var jsonArray = [];
     var contentTables = document.getElementsByClassName('contentTable');
     var id = 7001;

     for (var i = 0; i < contentTables.length; i++) {
        var contentTable = contentTables[i];
        var rows = contentTable.querySelectorAll("tbody tr");
        var dateString = rows[0].querySelector('th').childNodes[0].data;

        for (var j = 1; j < rows.length; j++) {
            var matchElement = rows[j].childNodes;
            var object = {};

            var time = matchElement[1].innerHTML.trim();
            var homeClub = matchElement[3].innerText.trim();
            var result = matchElement[5].innerText.trim();
            var awayClub = matchElement[7].innerText.trim();
            var venue = matchElement[9].innerText.trim();

            var date = new Date(dateString + ' ' + time);

            object._id = id++;
            object.attendance = 0;
            object.matchDate = date.getTime() - 7200000;
            object.awayClub = awayClub;
            object.homeClub = homeClub;
            object.homeGoal = result.charAt(0);
            object.awayGoal = result.charAt(4);
            object.venue = venue;
            object.round = 300 + Math.floor(id / 10) + 1;
            object.season = 80001;

            jsonArray.push(object);

            
        }
    }

    var x = jsonArray;
    console.log(JSON.stringify(x));
     </script>