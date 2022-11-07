import {
  createStyles,
  Header,
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, useNavigate } from "react-router-dom";

// local imports
import { Search } from "components/atoms";
import { DarkButton } from "components/atoms";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const { classes, theme } = useStyles();

  const name = localStorage.getItem("email");
  const navigate = useNavigate();

  const handleRemove = () => {
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <Box>
      <Header height={120} className="xs:px-20  px-8 ">
        <Group
          position="apart"
          sx={{
            height: "100%",
          }}
        >
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link to="/">
              <h1 className="  hover:bg-slate-500  rounded-lg">
                <img
                  className="w-24  "
                  src="https://rawcdn.githack.com/kanika4/RickAndMortyClient/ab85fc7050fb4644973094a15432e0ad80c623e9/src/assets/images/favicon.png"
                  alt=""
                />
              </h1>
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
            {name ? (
              <>
                <DarkButton />
                <Search />
                <div>
                  User: {name} <Button onClick={handleRemove}>Log Out</Button>{" "}
                </div>
              </>
            ) : (
              <div className="flex gap-x-4 items-center">
                <DarkButton />
                <Search />
                <Link to="/login">
                  <Button variant="default">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="default">Register</Button>
                </Link>
              </div>
            )}
          </Group>
        </Group>
        <Group position="apart" className="items-center  -mt-[112px]">
          <Link to="/">
            <h1 className=" md:hidden  hover:bg-slate-500  rounded-lg">
              <img
                className="w-24 "
                src="https://rawcdn.githack.com/kanika4/RickAndMortyClient/ab85fc7050fb4644973094a15432e0ad80c623e9/src/assets/images/favicon.png"
                alt=""
              />
            </h1>
          </Link>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="85%"
        padding="md"
        title={
          <div className="flex gap-x-4 items-center">
            Kuark <DarkButton />
          </div>
        }
        className={(classes.hiddenDesktop, "font-bold text-xl pt-12")}
        zIndex={1000000}
        position="right"
      >
        {name ? (
          <div>
            User: {name} <Button onClick={handleRemove}>Log Out</Button>{" "}
          </div>
        ) : (
          ""
        )}
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <div className="flex justify-center my-2">
            <Search />
          </div>

          <Link to="/" className={classes.link}>
            Home
          </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            {!name ? (
              <>
                <Button variant="default">
                  {" "}
                  <Link to="/login">Login </Link>
                </Button>

                <Button variant="default">
                  {" "}
                  <Link to="/register">Register </Link>
                </Button>
              </>
            ) : (
              ""
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
