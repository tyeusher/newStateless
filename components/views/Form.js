import html from "html-literal";

export default (st) => html`
  <form id="register" method="POST" action="">
    <div>
      <label for="url">Phot URL:</label>
      <input
        type="text"
        name="URL"
        id="URL"
        placeholder="Enter photo url"
        required
      />
    </div>
    <div>
      <label for="title">photo title:</label>
      <input type="text" name="title" id="title" placeholder="ENTER PHOTO" />
    </div>
    <input type="submit" name="submit" value="submit photo" />
  </form>
`;
