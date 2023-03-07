import CardPerfil from "../../components/Cards/Perfil";
import Navbar from "../../components/Header";
import SearchForm from "../../components/Search";



const PageUser = () => {




  return (

    <>
    <Navbar mode="private" />

    <h1>Principais Campanhas</h1>
    
    <main>

      <aside>

        <div>
          <SearchForm/>
        </div>



       <CardPerfil
              type="company"
              thumb="src/assets/backgroundUser.jpg"
              photo="src/assets/perfil.jpeg"
              name="Roshelle"
              list1={2}
              list2={6}
            />
      </aside>
      
    </main>
    </>
  );
}

export default PageUser;