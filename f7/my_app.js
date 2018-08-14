


//初始化f7框架


var app = new Framework7({
  // App root element
  
  root: '#app',
  // App Name
  name: 'My App',
	//风格只用ios
	theme: 'ios',		
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
    
  },
  // Add default routes
  routes: [
    {
    	
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters
});
//f7框架






//初始化导航
var mainView = app.views.create('.view-main');
//导航




//弹出框
