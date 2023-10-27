var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Component, lazy, useState, useContext } from "react";
import { j as jsxs, a as jsx, A as AdoptedPetContext } from "../ServerApp.mjs";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react/jsx-runtime";
class ErrorBoundary extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      hasError: false
    });
  }
  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }
  componentDidCatch(error, info) {
    console.error("Error boundary component caught an error ", error, info);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsxs("h2", {
        children: ["Error found withthis listing.", /* @__PURE__ */ jsx(Link, {
          to: "/",
          children: "Click here to go back to home page"
        })]
      });
    }
    return this.props.children;
  }
}
const ErrorBoundary$1 = ErrorBoundary;
const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!apiRes.ok) {
    throw new Error("details/${id} fetch not ok");
  }
  return apiRes.json();
};
class Carousel extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      active: 0
    });
    __publicField(this, "handleIndexClick", (e) => {
      this.setState({
        active: +e.target.dataset.index
      });
    });
  }
  render() {
    const {
      active
    } = this.state;
    const {
      images
    } = this.props;
    return /* @__PURE__ */ jsxs("div", {
      className: "carousel",
      children: [/* @__PURE__ */ jsx("img", {
        src: images[active],
        alt: "pet_hero"
      }), /* @__PURE__ */ jsx("div", {
        className: "carousel-smaller",
        children: images.map((photo, index) => /* @__PURE__ */ jsx("img", {
          onClick: this.handleIndexClick,
          "data-index": index,
          src: photo,
          className: index === active ? "active" : "",
          alt: "animal thumbnail"
        }, photo))
      })]
    });
  }
}
__publicField(Carousel, "defaultProps", {
  images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
});
const Modal = lazy(() => import("./Modal.db033230.mjs"));
const Details = () => {
  const {
    id
  } = useParams();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const results = useQuery(["details", id], fetchPet);
  if (results.isLoading) {
    return /* @__PURE__ */ jsx("div", {
      className: "loading-pane",
      children: /* @__PURE__ */ jsx("h2", {
        className: "loader",
        children: "\u{1F436}"
      })
    });
  }
  const pet = results.data.pets[0];
  return /* @__PURE__ */ jsxs("div", {
    className: "details",
    children: [/* @__PURE__ */ jsx(Carousel, {
      images: pet.images
    }), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("h1", {
        children: pet.name
      }), /* @__PURE__ */ jsx("h2", {
        children: `${pet.animal} \u2014 ${pet.breed} \u2014 ${pet.city}, ${pet.state}`
      }), /* @__PURE__ */ jsxs("button", {
        onClick: () => setShowModal(true),
        children: ["Adopt ", pet.name]
      }), /* @__PURE__ */ jsx("p", {
        children: pet.description
      }), showModal ? /* @__PURE__ */ jsx(Modal, {
        children: /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsxs("h1", {
            children: ["Would you like to adopt ", pet.name, "?"]
          }), /* @__PURE__ */ jsxs("div", {
            className: "buttons",
            children: [/* @__PURE__ */ jsx("button", {
              onClick: () => {
                setAdoptedPet(pet);
                navigate("/");
              },
              children: "Yes"
            }), /* @__PURE__ */ jsx("button", {
              onClick: () => setShowModal(false),
              children: "No"
            })]
          })]
        })
      }) : null]
    })]
  });
};
function DetailsErrorBoundary(props) {
  return /* @__PURE__ */ jsx(ErrorBoundary$1, {
    children: /* @__PURE__ */ jsx(Details, {
      ...props
    })
  });
}
export {
  DetailsErrorBoundary as default
};
