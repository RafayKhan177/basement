import { Card, Overlay, Button, Text } from "@mantine/core";
import classes from "./style.module.css";
import Link from "next/link";

export default function BookShowing() {
  return (
    <Card radius="md" className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div className={classes.content}>
        <Text size="lg" fw={700} className={classes.title}>
          Experience Ultimate Renovations
        </Text>

        <Text size="sm" className={classes.description}>
          Step into our exquisite showhome and unlock a world of inspiration for
          your dream abode.
        </Text>

        <Link href={"/contact"}>
          <Button
            className={classes.action}
            variant="white"
            color="dark"
            size="xs"
          >
            Book A Showing
          </Button>
        </Link>
      </div>
    </Card>
  );
}
