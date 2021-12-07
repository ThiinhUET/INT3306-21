let routes = {} // hold route of application
let templates = {} // hold view

// create function to dislay home and about pages

let app = document.getElementById('app');

function home() {
  let div = document.createElement('div');
  let link = document.createElement('a');
  link.href = '#/about';
  link.innerText = 'About';

  div.innerHTML = '<h1>HOME</h1>'
  div.appendChild(link);

  app.appendChild(div);
}

function about() {
  let div = document.createElement('div');
  let link = document.createElement('a');
  link.href = '#/';
  link.innerText = 'Home';

  div.innerHTML = '<h1>About</h1>'
  div.appendChild(link);

  app.appendChild(div)
}

function route(path, template) {
  if(typeof(template) === 'function') {
    return routes[path] = template;
  }

  else if (typeof(template) === 'string') {
    return routes[path] = templates[template];
  }
  else {
    return;
  }

}

function resoleRoute(route) {
  try {
    return routes[route];
  }catch(e){
    throw new Error(`Route ${route} not found`);
  };
};

function router(evt) {
  let url = window.location.hash.slice(1) || '/';
  // console.log(url);
  console.log(routes, templates);
  let route = resoleRoute(url);
  route();
}
function template(name, fn) {
  return templates[name] = fn;
}

template('home', function() {
  home();
})

template('about', function() {
  about()
})

route('/', 'home');
route('/about', 'about');

window.addEventListener('load', router);
window.addEventListener('hashchange', router);