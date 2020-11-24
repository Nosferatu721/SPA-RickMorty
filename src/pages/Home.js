import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="container">
      <div class="cards-characters--container" data-dark>
      ${characters.results
        .map(
          (character) => `
        <div class="card-character">
          <a href="#/${character.id}/">
            <figure>
                <img src="${character.image}" alt="${character.name}">
            </figure>
            <h3>${character.name}</h3>
          </a>
        </div>`
        )
        .join("")}
      </div>
    </div>
  `;
  return view;
};

export default Home;
