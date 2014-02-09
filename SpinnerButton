var Spinner = {
		o: $(".spinner-widget"),
		u: null,
		d: null,
		i: null,
		m: 1,
		x: null,
		init: function(){
			var _t = this;
			_t.u = _t.o.find('.spinner-up');
			_t.d = _t.o.find('.spinner-down');
			_t.i = _t.o.find('input');
			if (_t.i.data('min')){
				_t.m = _t.i.data('min');
			}
			if (_t.i.data('max') && (_t.i.data('max') != "")){
				_t.x = _t.i.data('max');
			}
			_t.i.on('change',function(){
				var l = parseInt(_t.i.val());
				if (isNaN(l)){
					_t.i.val(_t.m);
				}else{
					_t.i.val(l);
				}
			});
			_t.u.on('click',function(){
				if (_t.i.val() == ""){
					_t.i.val(_t.m);
				}else{
					var l = parseInt(_t.i.val());
					if (isNaN(l)){
						_t.i.val(_t.m);
					}else{
						if (_t.x !== null){
							if (l < _t.x){
								_t.i.val(++l);
							}else{
								_t.i.val(_t.x);
							}
						}else{
							_t.i.val(++l);
						}
					}
				}
			});
			_t.d.on('click', function(){
				if (_t.i.val() == ""){
					_t.i.val(_t.m);
				}else{
					var l = parseInt(_t.i.val());
					if (isNaN(l)){
						_t.i.val(_t.m);
					}else{
						if (l > _t.m){
							_t.i.val(--l);
						}else{
							_t.i.val(_t.m);
						}
					}
				}
			});
		},
	};
