(function() {
    var Rousel = function(element){
        var rousel = {
            version: "0.0.1"
        };

        rousel.e = $(element);
        rousel._elements = [];
        rousel._container = {};

        rousel.init = function(){
            var createContainer = function(){
                return '<div class="row"><div class="col-md-12" class="rousel-container"></div></div>';
            }

            rousel._createList = function(){
                var h = '<div class="row rousel-list">';
                var nElements = rousel._elements.length;
                for (var i = 0; i < nElements; i++){
                    h += '<div class="rousel-list-element">';
                    if (rousel._elements[i].t == 0){
                        h += '<img src="' + rousel._elements[i].src + '" class="col-md-12" data-to="' + i +'"/>';
                    }else{
                        h += '<div class="video-frame col-md-12" data-to="' + i +'"><i class="glyphicon glyphicon-play-circle"></i></div>';
                    }
                    h += '</div>';
                }
                h += '</div>';
                return h;
            }

            rousel._checkElements = function(els){
                rousel._elements = [];
                var nElements = els.length;
                for (var i = 0; i < nElements; i++){
                    var img = $(els[i]).find('img');
                    if (img.length > 0){
                        rousel._elements.push({t:0, src: img.attr('src')});
                    }else{
                        var vi = $(els[i]).find('video');
                        if (vi.length > 0){
                            rousel._elements.push({t:1, src: vi.attr('src')});
                        }
                    }
                }
            }
            rousel._showImage = function(e){
                rousel._container.html('<img src="' + e.src + '" class="col-md-12"/>');
            }

            var showVideo = function(e){
                rousel._container.html('<iframe src="//player.vimeo.com/video/' + e.src +'?title=0&amp;byline=0&amp;portrait=0&amp;color=ff0179" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            }

            rousel._selectElement = function(element){
                if (!isNaN(parseFloat(element)) && isFinite(element)){
                    if (rousel._elements[element] !== undefined){
                        if (rousel._elements[element].t == 0){
                            rousel._showImage(rousel._elements[element]);
                        }else{
                            showVideo(rousel._elements[element]);
                        }
                    }
                }
            }

            rousel._initListEvents = function(p){
                var _e = rousel._elements;
                var _t = rousel;
                p.on('click', '.row div', function(e){
                    var to = e.currentTarget.children.item(0).dataset.to;
                    if (_e[to]){
                        _t._selectElement(to);
                    }
                });
            }

            // El que haya más de uno por página para el futuro
            // La comprobación de que exista el elemento también
            var initialHtml = this.e.html();

            var els = this.e.find('ol li');
            rousel._checkElements(els);
            this.e.html(createContainer() + rousel._createList());
            rousel._container = $(this.e.children()[0]);
            rousel._initListEvents(this.e);
            rousel._selectElement(0);
        }


        rousel.init();

        return rousel;
    }

    var root = this;

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Rousel;
        root.Rousel = Rousel;
    } else {
        root.Rousel = Rousel;
    }
})();
