function Factorial(props)
{
    let a = props.a;
    let fac = 1;
    for (let i =1; i<=a; i++)
    {
        fac *= i;
    }
    return(
        <h2>{a}! = {fac}</h2>
    );
}
export default Factorial;