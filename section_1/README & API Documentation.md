## ANSWER SECTION 1
Create REST API Simple Blog Application, Articles and Comments

## RUN PROJECT
1. npm install
2. node server.js

## DATABASE MLAB SETTING PATH
/config/database.config.js

## API DOCUMENTATION

## 1. MENAMBAH Data Article
**METHOD :** `POST`  
**URL :**`localhost:3000/article`  
**BODY RAW JSON :** 
- `{"title": "my first article", "content": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}`
  
**EXAMPLE REQUEST**  
`POST http://localhost:3000/article`  

**EXAMPLE RESPONSE/OUTPUT (JSON) :**
~~~
{
    "title": "my first article",
    "content": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    "_id": "61d65c76f80c48ecc7ff64c0",
    "createdAt": "2022-01-06T03:05:26.202Z",
    "updatedAt": "2022-01-06T03:05:26.202Z",
    "__v": 0
}
~~~

## 2. MELIHAT SEMUA Data Article
**METHOD :** `GET`  
**URL :**`localhost:3000/article`  
  
**EXAMPLE REQUEST**  
`GET http://localhost:3000/article`  

**EXAMPLE RESPONSE/OUTPUT (JSON) :**
~~~
[
    {
        "_id": "61d65c76f80c48ecc7ff64c0",
        "title": "my first article",
        "content": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        "createdAt": "2022-01-06T03:05:26.202Z",
        "updatedAt": "2022-01-06T03:05:26.202Z",
        "__v": 0
    },
    {
        "_id": "61d65caef80c48ecc7ff64c2",
        "title": "my second article",
        "content": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        "createdAt": "2022-01-06T03:06:22.251Z",
        "updatedAt": "2022-01-06T03:06:22.251Z",
        "__v": 0
    },
    {
        "_id": "61d65cb4f80c48ecc7ff64c4",
        "title": "my third article",
        "content": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        "createdAt": "2022-01-06T03:06:28.947Z",
        "updatedAt": "2022-01-06T03:06:28.947Z",
        "__v": 0
    },
    {
        "_id": "61d65cc7f80c48ecc7ff64c6",
        "title": "Helo world",
        "content": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        "createdAt": "2022-01-06T03:06:47.822Z",
        "updatedAt": "2022-01-06T03:06:47.822Z",
        "__v": 0
    }
]
~~~

## 3. MELIHAT Data Article berdasarkan ID
**METHOD :** `GET`  
**URL :**`localhost:3000/article/<id_article>`  
  
**EXAMPLE REQUEST**  
`GET http://localhost:3000/article/61d65cb4f80c48ecc7ff64c4`  

**EXAMPLE RESPONSE/OUTPUT (JSON) :**
~~~
{
    "_id": "61d65cb4f80c48ecc7ff64c4",
    "title": "my third article",
    "content": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    "createdAt": "2022-01-06T03:06:28.947Z",
    "updatedAt": "2022-01-06T03:06:28.947Z",
    "__v": 0
}
~~~


## 4. MENGEDIT Data Article
**METHOD :** `PUT`  
**URL :**`localhost:3000/article/<id_article>`  
**BODY RAW JSON :** 
- `{"title": "My POST has been deleted", "content": "NOT lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}`

**EXAMPLE REQUEST**  
`PUT http://localhost:3000/article/61d65cb4f80c48ecc7ff64c4`  

**EXAMPLE RESPONSE/OUTPUT (JSON) :**
~~~
{
    "_id": "61d65cb4f80c48ecc7ff64c4",
    "title": "My POST has been deleted",
    "content": "NOT lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    "createdAt": "2022-01-06T03:06:28.947Z",
    "updatedAt": "2022-01-06T03:08:59.712Z",
    "__v": 0
}
~~~


## 5. MENGHAPUS Data Article
**METHOD :** `DELETE`  
**URL :**`localhost:3000/article/<id_article>`  

**EXAMPLE REQUEST**  
`DELETE http://localhost:3000/article/61d65cc7f80c48ecc7ff64c6`  

**EXAMPLE RESPONSE/OUTPUT (JSON) :**
~~~
{
    "message": "Article deleted successfully!"
}
~~~

## 6. MENAMBAH Data Comment
**METHOD :** `POST`  
**URL :**`http://localhost:3000/comment`  
**BODY RAW JSON :** 
- `{"comment": "this is a comment", "article": "61d65c76f80c48ecc7ff64c0"}`
  
**EXAMPLE REQUEST**  
`POST http://localhost:3000/comment`  

**EXAMPLE RESPONSE/OUTPUT (JSON) :**
~~~
{
    "comment": "this is a comment",
    "article": "61d65c76f80c48ecc7ff64c0",
    "_id": "61d65dbdf80c48ecc7ff64cf",
    "createdAt": "2022-01-06T03:10:53.938Z",
    "updatedAt": "2022-01-06T03:10:53.938Z",
    "__v": 0
}
~~~

## 7. MELIHAT SEMUA Data Comment
**METHOD :** `GET`  
**URL :**`localhost:3000/comment`  
  
**EXAMPLE REQUEST**  
`GET http://localhost:3000/comment`  

**EXAMPLE RESPONSE/OUTPUT (JSON) :**
~~~
[
    {
        "_id": "61d65dbdf80c48ecc7ff64cf",
        "comment": "this is a comment",
        "article": "61d65c76f80c48ecc7ff64c0",
        "createdAt": "2022-01-06T03:10:53.938Z",
        "updatedAt": "2022-01-06T03:10:53.938Z",
        "__v": 0
    },
    {
        "_id": "61d65df0f80c48ecc7ff64d2",
        "comment": "hello from someone",
        "article": "61d65c76f80c48ecc7ff64c0",
        "createdAt": "2022-01-06T03:11:44.623Z",
        "updatedAt": "2022-01-06T03:11:44.623Z",
        "__v": 0
    },
    {
        "_id": "61d65e09f80c48ecc7ff64d5",
        "comment": "that awesome.....",
        "article": "61d65c76f80c48ecc7ff64c0",
        "createdAt": "2022-01-06T03:12:09.205Z",
        "updatedAt": "2022-01-06T03:12:09.205Z",
        "__v": 0
    },
    {
        "_id": "61d65e2ff80c48ecc7ff64d8",
        "comment": "hello, your post is very great",
        "article": "61d65caef80c48ecc7ff64c2",
        "createdAt": "2022-01-06T03:12:47.471Z",
        "updatedAt": "2022-01-06T03:12:47.471Z",
        "__v": 0
    }
]
~~~

## 8. MELIHAT Data Comment berdasarkan ID Comment
**METHOD :** `GET`  
**URL :**`localhost:3000/comment/<id_comment>`  
  
**EXAMPLE REQUEST**  
`GET http://localhost:3000/comment/61d65e2ff80c48ecc7ff64d8`  

**EXAMPLE RESPONSE/OUTPUT (JSON) :**
~~~
{
    "_id": "61d65e2ff80c48ecc7ff64d8",
    "comment": "hello, your post is very great",
    "article": "61d65caef80c48ecc7ff64c2",
    "createdAt": "2022-01-06T03:12:47.471Z",
    "updatedAt": "2022-01-06T03:12:47.471Z",
    "__v": 0
}
~~~

## 9. MELIHAT SEMUA Data Comment berdasarkan ID Article
**METHOD :** `GET`  
**URL :**`localhost:3000/comment/<id_article>`  

**EXAMPLE REQUEST**  
`GET http://localhost:3000/comment/article/61d65c76f80c48ecc7ff64c0`  

**EXAMPLE RESPONSE/OUTPUT (JSON) :**
~~~
[
    {
        "_id": "61d65dbdf80c48ecc7ff64cf",
        "comment": "this is a comment",
        "article": "61d65c76f80c48ecc7ff64c0",
        "createdAt": "2022-01-06T03:10:53.938Z",
        "updatedAt": "2022-01-06T03:10:53.938Z",
        "__v": 0
    },
    {
        "_id": "61d65df0f80c48ecc7ff64d2",
        "comment": "hello from someone",
        "article": "61d65c76f80c48ecc7ff64c0",
        "createdAt": "2022-01-06T03:11:44.623Z",
        "updatedAt": "2022-01-06T03:11:44.623Z",
        "__v": 0
    },
    {
        "_id": "61d65e09f80c48ecc7ff64d5",
        "comment": "that awesome.....",
        "article": "61d65c76f80c48ecc7ff64c0",
        "createdAt": "2022-01-06T03:12:09.205Z",
        "updatedAt": "2022-01-06T03:12:09.205Z",
        "__v": 0
    }
]
~~~


## 10. MENGEDIT Data Comment
**METHOD :** `PUT`  
**URL :**`localhost:3000/comment/<id_comment>`  
**BODY RAW JSON :** 
- `{"comment": "Edit this comment"}`

**EXAMPLE REQUEST**  
`PUT http://localhost:3000/comment/61d65df0f80c48ecc7ff64d2`  

**EXAMPLE RESPONSE/OUTPUT (JSON) :**
~~~
{
    "_id": "61d65df0f80c48ecc7ff64d2",
    "comment": "Edit this comment",
    "article": "61d65c76f80c48ecc7ff64c0",
    "createdAt": "2022-01-06T03:11:44.623Z",
    "updatedAt": "2022-01-06T03:16:51.564Z",
    "__v": 0
}
~~~




## 11. MENGHAPUS Data Comment
**METHOD :** `DELETE`  
**URL :**`localhost:3000/comment/<id_comment>`  

**EXAMPLE REQUEST**  
`DELETE http://localhost:3000/comment/61d65e09f80c48ecc7ff64d5`  

**EXAMPLE RESPONSE/OUTPUT (JSON) :**
~~~
{
    "message": "Comment deleted successfully!"
}
~~~