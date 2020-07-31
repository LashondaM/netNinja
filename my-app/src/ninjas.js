import React from 'react';
import './Ninjas.css'

const Ninjas = ({ninjas, deleteNinja}) => {
        // console.log(this.props);
        const ninjaList = ninjas.map(ninja => {
            if (ninja.age > 20){
            return (
            <div className="ninja" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Afro: { ninja.afro }</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Erase Her</button>
            </div>
            )
            } else{
                return null
            }
        })
        
        return(
           <div className="ninja-list">
               { ninjaList
        //        ninjas.map(ninja => {
        //     return ninja.age > 20 ? (
        //         <div className="ninja" key={ninja.id}>
        //              <div>Name: { ninja.name }</div>
        //              <div>Age: { ninja.age }</div>
        //              <div>Afro: { ninja.afro }</div>
        //         </div>
        //     ) : null;
        // })
      }
           </div>
        )
    }

export default Ninjas
//NINJAS IS THE NAME OF THE CLASS THAT WE EXPORT, ALWAYS USE THE NAME OF THE CLASS WHEN EXPORTING WITH REACT TILL FURTHER NOTICE
// videos 14, 15, 18 of netNinja React and Redux,  watch it