import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const variants = {
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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ item, i }) => {

    const [open, setOpen] = useState(false)

    const style = { border: `2px solid ${colors[i]}`, display: 'flex', justifyContent: 'space-between', alignItem: 'center' };
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="li"
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }} onClick={() => {
                    if (item.name === 'Services') {
                        setOpen(!open)
                    }
                }}  >
                    <div className="icon-placeholder" style={style} />
                    <div className="text-placeholder" style={style}>
                        <p style={{ color: 'white', paddingLeft: '10px' }}>
                            {item.name}
                        </p>
                        {
                            item.name === 'Services' && (
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <ArrowDropDownIcon sx={{ color: 'white !important' }} />
                                </div>
                            )
                        }
                    </div>
                </div>
                {/* <div>
                    {item.name === 'Services' && open &&
                        (
                            <div style={{ background: 'rgba(0,0,0,0.5)', height: '250px', width: '200px', margin: 'auto' }}></div>

                        )
                    }
                </div> */}
            </div>


        </motion.li>
    );
};
