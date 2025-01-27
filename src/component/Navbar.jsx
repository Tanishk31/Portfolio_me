

// import PropTypes from "prop-types";
// import { useRef, useEffect } from "react";

// const Navbar = ({ navOpen }) => {
//   const lastActiveLink = useRef(); // Ref for the active link
//   const activeBox = useRef(); // Ref for the active box

//   // Initialize the active box to track the first active link on mount
//   const initActiveBox = () => {
//     if (lastActiveLink.current) {
     
//       activeBox.current.style.top=lastActiveLink.current.offsetTop='px';
//     activeBox.current.style.left=lastActiveLink.current.offsetLeft='px';
//     activeBox.current.style.width=lastActiveLink.current.offsetWidth='px';
//     activeBox.current.style.height=lastActiveLink.current.offsetHeight='px';
//     }
//   };

//   useEffect(initActiveBox, []);
//   const activeCurrentLink=(event)=>{
//       lastActiveLink.current?.classList.remove('active');
//       event.target.classList.add('active');
//       lastActiveLink.current=event.target;


//       activeBox.current.style.top=event.target.offsetTop='px';
//     activeBox.current.style.left=event.target.offsetLeft='px';
//     activeBox.current.style.width=event.target.offsetWidth='px';
//     activeBox.current.style.height=event.target.offsetHeight='px';
//   }
//   const navItems = [
//     { label: "Home", link: "#home", className: "nav-link"}, // Only assign the ref to the first item or the currently active one
//     { label: "About", link: "#about", className: "nav-link" },
//     { label: "Work", link: "#work", className: "nav-link" },
//     { label: "Reviews", link: "#reviews", className: "nav-link" },
//     { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
//   ];

//   return (
//     <nav className={`navbar ${navOpen ? "active" : ""}`}>
//       {navItems.map(({ label, link, className, ref }, key) => (
//         <a
//           href={link}
//           key={key}
//           className={className}
//           onClick={activeCurrentLink}
//         >
//           {label}
//         </a>
//       ))}
//       <div
//         className="active-box"
//         ref={activeBox} // Ref for the active box
//       ></div>
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   navOpen: PropTypes.bool.isRequired,
// };

// export default Navbar;
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(); // Ref for the last active link
  const activeBox = useRef(); // Ref for the active box

  // Function to move the active box
  const moveActiveBox = (target) => {
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = target;
    if (activeBox.current) {
      activeBox.current.style.top = `${offsetTop}px`;
      activeBox.current.style.left = `${offsetLeft}px`;
      activeBox.current.style.width = `${offsetWidth}px`;
      activeBox.current.style.height = `${offsetHeight}px`;
      activeBox.current.style.opacity = "0.5"; // Ensure visibility
    }
  };

  // Initialize the active box to track the first active link on mount
  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      moveActiveBox(lastActiveLink.current);
    }
  };

  useEffect(initActiveBox, []);
  window.addEventListener('resize',initActiveBox);
  const activeCurrentLink = (event) => {
    // Remove 'active' class from the previous link
    lastActiveLink.current?.classList.remove("active");
    // Add 'active' class to the clicked link
    event.target.classList.add("active");
    // Set the last active link to the clicked target
    lastActiveLink.current = event.target;
    // Move the active box
    moveActiveBox(event.target);
  };

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    // { label: "Reviews", link: "#reviews", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <nav className={'navbar '+(navOpen ? "active" : '')}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={className}
          onClick={activeCurrentLink}
          ref={key === 0 ? lastActiveLink : null} // Set ref to the first link initially
        >
          {label}
        </a>
      ))}
      <div
        className="active-box"
        ref={activeBox} // Ref for the active box
      ></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
