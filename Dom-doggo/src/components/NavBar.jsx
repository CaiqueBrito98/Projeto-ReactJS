import Button from 'react-bootstrap/Button';
export default function NavBar() {
return(
    <main style={{width:'100vw', display:'flex', justifyContent:'center' , backgroundColor:'#33ffb2'}}> 
        <div style={{width:'50%', display:'flex', flexDirection:'row' , justifyContent:'space-between' , alignItems:'center'}}>
        <h1 style={{color:'white'}}>Dom Doggo</h1>
            <div style={{display:'flex' , gap:'10px'}}>          
                <Button variant='secondary'>Veiculos</Button>
                <Button variant='secondary'>Eletronicos</Button>
                <Button variant='secondary'>Livros</Button>
            </div>  
        </div>
    </main>
)
}