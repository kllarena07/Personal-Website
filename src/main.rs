use actix_files::NamedFile;
use actix_web::{get, App, HttpServer, Result};
use std::env;
use std::path::PathBuf;

#[get("/")]
async fn index() -> Result<NamedFile> {
    let root = env::current_dir().unwrap();
    let abs_path = format!("{}/app/index.html", root.to_str().unwrap());
    let path: PathBuf = PathBuf::from(abs_path);
    Ok(NamedFile::open(path)?)
}

#[get("/projects")]
async fn projects() -> Result<NamedFile> {
    let root = env::current_dir().unwrap();
    let abs_path = format!("{}/app/projects/index.html", root.to_str().unwrap());
    let path: PathBuf = PathBuf::from(abs_path);
    Ok(NamedFile::open(path)?)
}

#[get("/skills")]
async fn skills() -> Result<NamedFile> {
    let root = env::current_dir().unwrap();
    let abs_path = format!("{}/app/skills/index.html", root.to_str().unwrap());
    let path: PathBuf = PathBuf::from(abs_path);
    Ok(NamedFile::open(path)?)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(index).service(projects).service(skills))
        .bind("127.0.0.1:8080")? // Bind the server to localhost on port 8080
        .run()
        .await
}
