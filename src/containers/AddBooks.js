import React from "react";

const AddBooks = () => {
  return (
    <main>
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre dans votre bibliothèque</p>
          <form className="form-inline justify-content-center">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Titre"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control ml-3"
                placeholder="Auteur"
                required
              />
            </div>
            <div className="form-group">
              <button className="btn btn-outline-secondary ml-3">
                Ajouter un livre
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container" style={{ minHeight: "200px" }}>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              <li>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddBooks;
