export default{
    pointDist(_point1,_point2){
        return Math.sqrt(Math.pow(_point1.x-_point2.x,2)+Math.pow(_point1.y-_point2.y,2))
    }

}