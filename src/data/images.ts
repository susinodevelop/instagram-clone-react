import ImageModel from "../models/image-model";

export const ImageData: ImageModel[] = [
    {
        id: "1",
        source: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "imagen",
        author: {
            username: "pepe_ga",
            email: "email@email.com"
        }
    },
    {
        id: "2",
        source: "https://th.bing.com/th/id/R.3fb61ee0572271fae99f4c413e8f4bc7?rik=HXdtlOM6DTXrtQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-s5nlQK14mDc%2fUtL0TEeJ9RI%2fAAAAAAAAY2U%2fLYDmcixgR1M%2fs1600%2f187959.jpg&ehk=VBm5hE%2bzVkY0sWWRjlJMX%2f0K83eiG9M9yOEWs6NumFo%3d&risl=&pid=ImgRaw&r=0",
        alt: "imagen",
        author: {
            username: "juan",
            email: "email@email.com"
        }
    },
    {
        id: "3",
        source: "https://th.bing.com/th/id/R.c7f4006070cafc30d082d1ca839a17bb?rik=LSlgyzjrtf9HPg&riu=http%3a%2f%2fcuriosidadescuriosas.com%2fwp-content%2fuploads%2f2012%2f12%2fFotografia-de-Paisaje-Natural-6.jpg&ehk=%2fed%2bE5lKkuRNmF4%2fqdni46EnAkAc7RaV4JuCuWw%2b7ec%3d&risl=&pid=ImgRaw&r=0",
        alt: "imagen",
        author: {
            username: "lucas",
            email: "email@email.com"
        }
    },
    {
        id: "4",
        source: "https://3.bp.blogspot.com/-e4rYTSwn8Fg/UYGHHTzFX4I/AAAAAAABwKk/CoymthQWNKs/s1600/hermoso-atardecer-amazing-sunset.jpg",
        alt: "imagen",
        author: {
            username: "marta",
            email: "email@email.com"
        }
    },
    {
        id: "5",
        source: "https://4.bp.blogspot.com/-WWQhQ-5nabE/VG5RaqVx2VI/AAAAAAACY8w/xulItLmvqWo/s1600/paisajes%2Bnaturales%2Bnuevas%2Bfotos%2Blagos%2Bmonta%C3%B1as%2Bflores%2By%2Bbosques%2B(5).jpg",
        alt: "imagen",
        author: {
            username: "bernardo",
            email: "email@email.com"
        }
    },
]

export const ProfilePictureSuso: ImageModel = {
    id: "1",
    source: "https://images.pexels.com/users/avatars/501272/justin-shaifer-473.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1",
    alt: "imagen suso",
    author: {
        username: "suso_gz",
        email: "email@email.com"
    }
}