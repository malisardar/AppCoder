import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import logo from '../../assets/images/logo.webp'
import Image from "next/image";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};
const variants2 = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const pages = [{ name: "Home" }, { name: "About Us" }, { name: "Services" }, { name: "Blogs" }, { name: "Contact Us" }];

export const Navigation = () => (
    <>
        <motion.div className="imgDiv" variants={variants2}>
            <Image src={logo} height={150} />
        </motion.div>
        <motion.ul variants={variants} className="ul" >

            {pages.map((item, i) => (
                <MenuItem item={item} key={i} i={i} />
            ))}
        </motion.ul>
    </>
);

