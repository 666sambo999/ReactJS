import male from './icon/male.png';
import female from './icon/female.png';
import './Artical.css'

function Artical(props)
{
    console.log(props.db);
    //   return (<article>
    //    {/* <p>
    //      Не удаётся установить соединение с сайтом.
    //     Pageclip is a simple way to save information from your website via forms or front-end JavaScript. 
    //     That is, you can save data from your website without a server—Pageclip is your server.
    //   </p>
    //   <p>
    //     lorem*5 = tab(будет много текста:) */
    //   </p> */}
    // </article>)
    //let icon = props.db["people"][0].pol == "male" ? male : female;
    //if(props.db["people"][0].pol == "male")icon = male;
    //else icon=female;
    return(
      //{console.log("Hello")}
      <div className='app'>
            {
                Object.keys(props.db["people"]).map(item => {
                    let icon = props.db["people"][item].pol === "male" ? male : female;
                    //console.log(item);
                    return (
                    <div className="card" key={item}>
                        <img src={props.db["people"][item].photo} alt="" />
                        <div className="name">
                            {props.db["people"][item].name + ' ' + props.db["people"][item].surname}
                        </div>

                        <div className="pol">
                            <img src={icon} alt="" />
                        </div>

                        <div className="age">
                            {props.db["people"][item].age}
                        </div>
                    </div>
                    )
                })
            }
      </div>
    )  
}
export default Artical;