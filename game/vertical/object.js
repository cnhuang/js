
function CanvasObject (w,h,x,y)  
{	
	this.w = w;
	this.h = h;
	this.x = x;
	this.y = y;		
	this.color = '#0f0';
	return true;
}

CanvasObject.prototype.move = function (x,y){
	this.x += x;
	this.y += y;
}
	
CanvasObject.prototype.draw = function (ctx) {
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.w, this.h);
}
	
CanvasObject.prototype.getX = function(){
	return this.x;
}

CanvasObject.prototype.getY = function(){
	return this.y;
}

CanvasObject.prototype.getW = function(){
	return this.w;
}

CanvasObject.prototype.getH = function(){
	return this.h;
}

CanvasObject.prototype.setPosition = function(x,y){
	this.x = x;
	this.y = y;
}

CanvasObject.prototype.isCollision = function(obj){  
	
	if( this.getX() > (obj.getX() + obj.getW())
	 || obj.getX() > (this.getX() + this.getW()))
	{
		return false;
	}
	else if( this.getY() > (obj.getY() + obj.getH()) 
		  || obj.getY() > (this.getY() + this.getH())) 
	{
		return false;
	}
	else
	{
		return true;
	}  
}


function MovingCanvasObject(w,h,x,y,speed)
{
	this.w = w;
	this.h = h;
	this.x = x;
	this.y = y;	
	this.speed = speed;
	this.color='#f00';
	return true;
}

MovingCanvasObject.prototype = new CanvasObject();

MovingCanvasObject.prototype.getSpeed = function(){
	return this.speed;
}

