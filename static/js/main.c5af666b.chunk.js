(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c);a(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(9),l=a(10),i=a(12),m=a(11),u=a(3),p=a.n(u),v=a(7),d=a(15),f={},h=function(){var e=Object(v.a)(p.a.mark((function e(t){var a,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=f[t])){e.next=3;break}return e.abrupt("return",a);case 3:return e.next=5,fetch(t);case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,f[t]=r,e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");case 3:return t=e.sent,e.abrupt("return",t.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(v.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h("https://pokeapi.co/api/v2/pokemon/".concat(t));case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(v.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(t.species.url);case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),N=(a(8),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(this.props.name);case 2:return t=e.sent,e.next=5,b(t);case 5:a=e.sent,this.setState({pokemon:t,pokemonEvolution:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!this.state.pokemon)return r.a.createElement("div",null);var e=this.state,t=e.pokemon,a=e.pokemonEvolution,n=this.props.showDetails,c=a.evolves_from_species,o=n?"/pokedex/":"/pokedex/pokemon/".concat(t.name);return n?r.a.createElement(d.b,{to:o},r.a.createElement("div",{className:"cardDetailContainer"},r.a.createElement("div",null,r.a.createElement("p",{className:"pokePhrase"},a.flavor_text_entries[0].flavor_text)),r.a.createElement("div",{className:"pokeIMGDetail"},r.a.createElement("img",{alt:"pokemon",className:"pokeimg",src:t.sprites.front_default})),r.a.createElement("div",{className:"CardContentDetail"},r.a.createElement("div",{className:"pokeIDDetail"},"ID / ",t.id),r.a.createElement("p",{className:"pokeNameDetail"},t.name),r.a.createElement("div",{className:"pokeTypeContainerDetail"},t.types.map((function(e){return r.a.createElement("div",{className:"pokeType",key:e.slot},e.type.name)}))),r.a.createElement("div",null,c?r.a.createElement("div",{className:"evolutionDetail"},"Evoluciona de:",r.a.createElement("p",{className:"evolPokemonDetail"},a.evolves_from_species.name)):r.a.createElement("div",null))))):r.a.createElement(d.b,{to:o,className:"card"},r.a.createElement("div",{className:"cardHeader"},r.a.createElement("img",{className:"pokeIMG",alt:"pokemon",src:t.sprites.front_default}),r.a.createElement("div",{className:"pokeID"},"ID / ",t.id)),r.a.createElement("div",{className:"CardContent"},r.a.createElement("p",{className:"pokeName"},t.name),r.a.createElement("div",{className:"pokeTypeContainer"},t.types.map((function(e){return r.a.createElement("div",{className:"pokeType",key:e.slot},e.type.name)}))),r.a.createElement("div",{className:"verticalLine"},c?r.a.createElement("div",{className:"evolution"},"Evoluciona de:",r.a.createElement("p",{className:"evolPokemon"},a.evolves_from_species.name)):r.a.createElement("div",null))))}}]),a}(n.Component));var x=function(e){var t=e.list;return r.a.createElement("div",{className:"cardContainer"},t.map((function(e){return r.a.createElement(N,{key:e.name,name:e.name})})))};var y=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"searchContainer"},r.a.createElement("input",{onChange:t,className:"searchInput",type:"search",placeholder:"Filtra pokemons por nombre..."}))};var w=function(){return r.a.createElement("div",{className:"containerBack"},r.a.createElement("div",{className:"topContainer"},r.a.createElement("div",{className:"blackSquareLeftTop"}),r.a.createElement("div",{className:"blackSquareRightTop"})),r.a.createElement("div",{className:"bottomContainer"},r.a.createElement("div",{className:"redSemicircleLeftBottom"}),r.a.createElement("div",{className:"redSemicircleRightBottom"})))};var j=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"scrollable"},e.children))},C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onSearchChange=function(e){n.setState({searchfield:e.target.value})},n.state={pokemonList:[],searchfield:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,this.setState({pokemonList:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.pokemonList.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"app"},r.a.createElement(w,null),r.a.createElement("div",{className:"container"},r.a.createElement(y,{searchChange:this.onSearchChange}),r.a.createElement(j,null,r.a.createElement(x,{list:t}))))}}]),a}(n.Component),O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.match.params.name;return r.a.createElement("div",{className:"app"},r.a.createElement(w,null),r.a.createElement(N,{name:e,showDetails:!0}))}}]),a}(n.Component),g=a(1),D=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/pokedex/",exact:!0,component:C}),r.a.createElement(g.b,{path:"/pokedex/pokemon/:name",exact:!0,component:O}),r.a.createElement(g.a,{from:"/",to:"/pokedex/",strict:!0})))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){}},[[23,1,2]]]);
//# sourceMappingURL=main.c5af666b.chunk.js.map