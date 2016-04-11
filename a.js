var li = document.getElementsByTagName('li');

        var menu = function(itemList){
            var listener = [];
            var menuitems = [];
            for(var k=0;k<3;k++)
                listener.push([]);
            listener[0].push(removeSelectedClass);
            listener[0].push(displayHome);
            listener[1].push(removeSelectedClass);
            listener[1].push(displaySpecifications);
            listener[2].push(removeSelectedClass);
            listener[2].push(displayRewards);

            function removeSelectedClass(){
                Array.prototype.forEach.call(itemList, function(element){
                    element.classList.remove('selected');
                });
            }
            function displayHome(){
                var x = document.getElementsByClassName('menu-item');
                for(var y=0;y<x.length;y++)
                    x[y].classList.remove('display');
                document.getElementById('home').classList.add('display');
            }
            function displaySpecifications(){
                var x = document.getElementsByClassName('menu-item');
                for(var y=0;y<x.length;y++)
                    x[y].classList.remove('display');
                document.getElementById('specifications').classList.add('display');
            }
            function displayRewards(){
                var x = document.getElementsByClassName('menu-item');
                for(var y=0;y<x.length;y++)
                    x[y].classList.remove('display');
                document.getElementById('rewards').classList.add('display');
            }

            var menuitem = function(item,listeners){
                function onclick(){
                    listeners.forEach(function(elem){
                        if(typeof elem == 'function')
                            elem();
                    });
                    item.classList.add('selected');
                }
                return {
                    onclick:onclick
                };
            }
            menuitems.push(menuitem(itemList[0],listener[0]));
            menuitems.push(menuitem(itemList[1],listener[1]));
            menuitems.push(menuitem(itemList[2],listener[2]));
            function get(item){
                return menuitems[item];
            }
            get(0).onclick();
            return {
                get:get
            };
        }(li);

        for (var i=0;i<li.length;i++)
            li[i].addEventListener('click',menu.get(i).onclick);
