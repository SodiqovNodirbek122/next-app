/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from 'react'
import {
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    makeStyles,
} from '@material-ui/core'
import { i18n } from '../../i18n'
import style from './header.module.scss'


const useStyles = makeStyles(() => ({
    paper: {
        cursor: "pointer",
        borderRadius: '6px',
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0',
        background: '#fff',
        fontFamily: "'San-Francisco', sans-serif",
        overflow: 'hidden',

        '& .MuiMenuItem-root': {
            color: '#171A23',
            padding: '10px !important',
            minWidth: '70px',
            display: 'flex',
            fontWeight: '500',
            justifyContent: 'space-between',
            fontFamily: "'San-Francisco', sans-serif",
        },

        '& .MuiList-root': {
            padding: '0',
        },
        '& .MuiListItem-root:hover': {
            background: 'rgba(255,255,255,0.2)',
        },
    },
    popper: {
        cursor: "pointer",
        zIndex: '999',
        top: '10px !important',
        left: '4px !important',
        '@media (max-width:876px)': {
            top: '10px !important',
            left: '0 !important',
        },
        '@media (max-width:767px)': {
            top: '3px !important',
            left: '4px !important',
        },
    },
}))
const languageData = [
    {
        lang: 'uz',
        inner: `UZ`,
    },
    {
        lang: 'ru',
        inner: 'РУ',
    },
    {
        lang: 'en',
        inner: 'EN',
    },
]
const LanguageDropdown = () => {
    const [activeLang, setActiveLang] = useState('')
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null)
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }
        setOpen(false)
    }
    const handleLanguageChange = (item) => {
        i18n.changeLanguage(item?.lang)
        // .then(() => {
        // Router.events.on('routeChangeComplete', () => {
        //     if (
        //         [
        //             '/shop/[id]',
        //             '/products/[id]',
        //             '/product/[id]',
        //             '/product/type/[id]',
        //         ].includes(router.pathname)
        //     ) {
        //         window.location.reload()
        //     }
        // })
        // })
        // .catch((err) => console.log(err))
    }
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        }
    }

    const prevOpen = useRef(open)
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus()
        }

        prevOpen.current = open
    }, [open])
    
    useEffect(() => {
        const currentLang = languageData?.find(
            (el) => el.lang === i18n.language,
        )
        if (currentLang) {
            setActiveLang(currentLang)
        }
        // console.log(i18n.language);
    }, [i18n.language])
    return (
        <>
            <div
                style={{ cursor: "pointer" }}
                className={` mx-4`}
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                {activeLang?.inner}
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    className={classes.popper}
                    role={undefined}
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom'
                                        ? 'center top'
                                        : 'center bottom',
                            }}
                        >
                            <Paper className={classes.paper}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="menu-list-grow"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        {languageData?.map(
                                            (item) =>
                                                i18n.language !== item.lang && (
                                                    <MenuItem
                                                        key={item?.lang}
                                                        onClick={(e) => {
                                                            handleClose(e)
                                                            setActiveLang(item)
                                                            handleLanguageChange(
                                                                item,
                                                            )
                                                        }}
                                                        disableRipple
                                                    >
                                                        {item.inner}
                                                    </MenuItem>
                                                ),
                                        )}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </>
    )
}

export default LanguageDropdown
