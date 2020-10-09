import { Alert, CriticalAlert, InfoAlert, SuccessAlert, WarningAlert } from "@react-components/alert";
import { Button } from "@react-components/button";
import { Content } from "@react-components/view";
import { Heading, Paragraph } from "@react-components/text";
import { InfoIcon } from "@react-components/icons";
import { Inline, Stack } from "@react-components/layout";
import { ListItem, UnorderedList } from "@react-components/list";
import { TextLink } from "@react-components/link";
import { createChromaticSection, paramsBuilder, storiesOfBuilder } from "@utils";
import { useEventCallback } from "@react-components/shared";
import { useState } from "react";

function stories(segment) {
    return storiesOfBuilder(module, createChromaticSection("Alert"))
        .segment(segment)
        .parameters(paramsBuilder()
            .canvasLayout({ width: "80%" })
            .build())
        .build();
}

stories()
    .add("text only", () =>
        <Stack>
            <Inline verticalAlign="end">
                <Alert size="sm">Scheduled launch today at 1PM.</Alert>
                <Alert size="sm">Scheduled launch today at 1PM.<br />Please be cautious.</Alert>
            </Inline>
            <Inline verticalAlign="end">
                <Alert>Scheduled launch today at 1PM.</Alert>
                <Alert>Scheduled launch today at 1PM.<br />Please be cautious.</Alert>
            </Inline>
            <Inline verticalAlign="end">
                <Alert size="lg">Scheduled launch today at 1PM.</Alert>
                <Alert size="lg">Scheduled launch today at 1PM.<br />Please be cautious.</Alert>
            </Inline>
        </Stack>
    )
    .add("text + dismiss", () =>
        <Stack>
            <Inline verticalAlign="end">
                <Alert size="sm" onDismiss={() => {}}>Scheduled launch today at 1PM.</Alert>
                <Alert size="sm" onDismiss={() => {}}>Scheduled launch today at 1PM.<br />Please be cautious.</Alert>
            </Inline>
            <Inline verticalAlign="end">
                <Alert onDismiss={() => {}}>Scheduled launch today at 1PM.</Alert>
                <Alert onDismiss={() => {}}>Scheduled launch today at 1PM.<br />Please be cautious.</Alert>
            </Inline>
            <Inline verticalAlign="end">
                <Alert size="lg" onDismiss={() => {}}>Scheduled launch today at 1PM.</Alert>
                <Alert size="lg" onDismiss={() => {}}>Scheduled launch today at 1PM.<br />Please be cautious.</Alert>
            </Inline>
        </Stack>
    )
    .add("icon + text", () =>
        <Stack>
            <Inline verticalAlign="end">
                <Alert size="sm">
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.</Content>
                </Alert>
                <Alert size="sm">
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.<br /><TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Content>
                </Alert>
            </Inline>
            <Inline verticalAlign="end">
                <Alert>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.</Content>
                </Alert>
                <Alert>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.<br /><TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Content>
                </Alert>
            </Inline>
            <Inline verticalAlign="end">
                <Alert size="lg">
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.</Content>
                </Alert>
                <Alert size="lg">
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.<br /><TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Content>
                </Alert>
            </Inline>
        </Stack>
    )
    .add("icon + text + dismiss", () =>
        <Stack>
            <Inline verticalAlign="end">
                <Alert size="sm" onDismiss={() => {}}>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.</Content>
                </Alert>
                <Alert size="sm" onDismiss={() => {}}>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.<br /><TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Content>
                </Alert>
            </Inline>
            <Inline verticalAlign="end">
                <Alert onDismiss={() => {}}>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.</Content>
                </Alert>
                <Alert onDismiss={() => {}}>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.<br /><TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Content>
                </Alert>
            </Inline>
            <Inline verticalAlign="end">
                <Alert size="lg" onDismiss={() => {}}>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.</Content>
                </Alert>
                <Alert size="lg" onDismiss={() => {}}>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.<br /><TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Content>
                </Alert>
            </Inline>
        </Stack>
    )
    .add("icon + text + action", () =>
        <Stack>
            <Inline verticalAlign="end">
                <Alert size="sm">
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.</Content>
                    <Button>Undo</Button>
                </Alert>
                <Alert size="sm">
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.<br /><TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Content>
                    <Button>Undo</Button>
                </Alert>
            </Inline>
            <Inline verticalAlign="end">
                <Alert>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.</Content>
                    <Button>Undo</Button>
                </Alert>
                <Alert>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.<br /><TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Content>
                    <Button>Undo</Button>
                </Alert>
            </Inline>
            <Inline verticalAlign="end">
                <Alert size="lg">
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.</Content>
                    <Button>Undo</Button>
                </Alert>
                <Alert size="lg">
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.<br /><TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Content>
                    <Button>Undo</Button>
                </Alert>
            </Inline>
        </Stack>
    )
    .add("icon + text + action + dismiss", () =>
        <Stack>
            <Inline verticalAlign="end">
                <Alert size="sm" onDismiss={() => {}}>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.</Content>
                    <Button>Undo</Button>
                </Alert>
                <Alert size="sm" onDismiss={() => {}}>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.<br /><TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Content>
                    <Button>Undo</Button>
                </Alert>
            </Inline>
            <Inline verticalAlign="end">
                <Alert onDismiss={() => {}}>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.</Content>
                    <Button>Undo</Button>
                </Alert>
                <Alert onDismiss={() => {}}>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.<br /><TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Content>
                    <Button>Undo</Button>
                </Alert>
            </Inline>
            <Inline verticalAlign="end">
                <Alert size="lg" onDismiss={() => {}}>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.</Content>
                    <Button>Undo</Button>
                </Alert>
                <Alert size="lg" onDismiss={() => {}}>
                    <InfoIcon />
                    <Content>Scheduled launch today at 1PM.<br /><TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Content>
                    <Button>Undo</Button>
                </Alert>
            </Inline>
        </Stack>
    )
    .add("rich content", () =>
        <Stack>
            <Alert size="sm" onDismiss={() => {}}>
                <InfoIcon />
                <Content>
                    <Heading as="span">Scheduled launch</Heading>
                    <Paragraph>A launch is scheduled today at 1PM.</Paragraph>
                    <UnorderedList>
                        <ListItem>Be cautious</ListItem>
                        <ListItem>Close your windows</ListItem>
                    </UnorderedList>
                </Content>
                <Button>Undo</Button>
            </Alert>
            <Alert onDismiss={() => {}}>
                <InfoIcon />
                <Content>
                    <Heading as="span">Scheduled launch</Heading>
                    <Paragraph>A launch is scheduled today at 1PM.</Paragraph>
                    <UnorderedList>
                        <ListItem>Be cautious</ListItem>
                        <ListItem>Close your windows</ListItem>
                    </UnorderedList>
                </Content>
                <Button>Undo</Button>
            </Alert>
            <Alert size="lg" onDismiss={() => {}}>
                <InfoIcon />
                <Content>
                    <Heading as="span">Scheduled launch</Heading>
                    <Paragraph>A launch is scheduled today at 1PM.</Paragraph>
                    <UnorderedList>
                        <ListItem>Be cautious</ListItem>
                        <ListItem>Close your windows</ListItem>
                    </UnorderedList>
                </Content>
                <Button>Undo</Button>
            </Alert>
        </Stack>
    )
    .add("boxed", () =>
        <div style={{ width: "500px" }}>
            <Alert>
                <InfoIcon />
                <Content>Scheduled launch today at 1PM.</Content>
            </Alert>
        </div>
    )
    .add("info", () =>
        <Stack>
            <InfoAlert size="sm" onDismiss={() => {}}>
                <strong>Scheduled launch</strong> today at 1PM. <TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.
            </InfoAlert>
            <InfoAlert onDismiss={() => {}}>
                <strong>Scheduled launch</strong> today at 1PM. <TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.
            </InfoAlert>
            <InfoAlert size="lg" onDismiss={() => {}}>
                <strong>Scheduled launch</strong> today at 1PM. <TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.
            </InfoAlert>
            <InfoAlert onDismiss={() => {}}>
                <Heading as="span">Scheduled launch</Heading>
                <Paragraph>A launch is scheduled today at 1PM. <TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Paragraph>
            </InfoAlert>
        </Stack>
    )
    .add("success", () =>
        <Stack>
            <SuccessAlert onDismiss={() => {}}>
                <strong>Scheduled launch</strong> today at 1PM. <TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.
            </SuccessAlert>
            <SuccessAlert onDismiss={() => {}}>
                <Heading as="span">Scheduled launch</Heading>
                <Paragraph>A launch is scheduled today at 1PM. <TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Paragraph>
            </SuccessAlert>
        </Stack>
    )
    .add("warning", () =>
        <Stack>
            <WarningAlert onDismiss={() => {}}>
                <strong>Scheduled launch</strong> today at 1PM. <TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.
            </WarningAlert>
            <WarningAlert onDismiss={() => {}}>
                <Heading as="span">Scheduled launch</Heading>
                <Paragraph>A launch is scheduled today at 1PM. <TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Paragraph>
            </WarningAlert>
        </Stack>
    )
    .add("critical", () =>
        <Stack>
            <CriticalAlert onDismiss={() => {}}>
                Scheduled launch today at 1PM. <TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.
            </CriticalAlert>
            <CriticalAlert onDismiss={() => {}}>
                <strong>Scheduled launch</strong> today at 1PM. <TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.
            </CriticalAlert>
            <CriticalAlert onDismiss={() => {}}>
                <Heading as="span">Scheduled launch</Heading>
                <Paragraph>A launch is scheduled today at 1PM. <TextLink href="https://dictionary.cambridge.org/dictionary/english/cautious" external>Please be cautious</TextLink>.</Paragraph>
            </CriticalAlert>
        </Stack>
    )
    .add("variation without dismiss", () =>
        <Stack>
            <InfoAlert><strong>Scheduled launch</strong> today at 1PM. Please be cautious.</InfoAlert>
            <InfoAlert>Scheduled launch today at 1PM. Please be cautious.</InfoAlert>
        </Stack>
    )
    .add("styling", () =>
        <Stack>
            <Alert className="border-red"><strong>Scheduled launch</strong> today at 1PM. Please be cautious.</Alert>
            <Alert style={{ border: "1px solid red" }}><strong>Scheduled launch</strong> today at 1PM. Please be cautious.</Alert>
        </Stack>
    )
    .add("controlled dimiss",
         () => {
             const [show, setShow] = useState(true);

             const toggleAlert = useEventCallback(() => {
                 setShow(x => !x);
             });

             return (
                 <>
                     <Button onClick={toggleAlert}>Toggle</Button>
                     <br /><br />
                     <InfoAlert show={show} onDismiss={toggleAlert}>
                         <strong>Scheduled launch</strong> today at 1PM. Please be cautious.
                     </InfoAlert>
                 </>
             );
         },
         paramsBuilder().chromaticIgnore().build()
    );