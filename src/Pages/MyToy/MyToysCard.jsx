import { FaPenSquare, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysCard = ({ toy, setToys }) => {
  //  const [toys, setToys] = useState([]);
  const {
    _id,
    availableQuantity,
    name,
    pictureUrl,
    price,
    sellerName,
    subCategory,
  } = toy;
  // console.log(toy)

  const handleDeleteCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");

        fetch(`https://b7a11-toy-marketplace-server-side-salmanfursi.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              // alert("Your product deleted successfully");
              // const remaining = toys.;
              setToys((toys) => toys?.filter((toy) => toy._id !== id) || []);
            }
          });
      }
    });
  };

  return (
    <tr>
      <th>
        <Link>
          <FaTrashAlt
            onClick={() => handleDeleteCart(toy._id)}
            className="text-4xl my-6 text-red-600 "
          ></FaTrashAlt>
        </Link>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask w-24 h-24">
              <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{subCategory}</td>
      <td>{sellerName}</td>
      <td>${price}</td>
      <td>{availableQuantity}</td>

      <th className="flex items-center gap-3">
        <Link to={`/updateToy/${_id}`}>
          <FaPenSquare className="text-5xl my-6 "></FaPenSquare>
        </Link>
      </th>
    </tr>
  );
};

export default MyToysCard;