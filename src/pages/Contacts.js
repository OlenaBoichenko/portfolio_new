export const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Canada, BC, Sidney</p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:ol.boichenko.dev@gmail.com">
                ol.boichenko.dev@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};
