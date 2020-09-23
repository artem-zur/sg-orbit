import { Link } from "@react-components/link";
import { Paragraph } from "@react-components/text";
import { createChromaticSection, paramsBuilder, storiesOfBuilder } from "@utils";

function stories(segment) {
    return storiesOfBuilder(module, createChromaticSection("Paragraph"))
        .segment(segment)
        .parameters(paramsBuilder()
            .canvasLayout({ width: "80%" })
            .build())
        .build();
}

stories()
    .add("default", () =>
        <div>
            <Paragraph size="2xl">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph size="xl">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph size="lg">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph>If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph size="sm">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph size="xs">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
        </div>
    )
    .add("as div", () =>
        <div>
            <Paragraph as="div" size="2xl">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph as="div" size="xl">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph as="div" size="lg">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph as="div">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph as="div" size="sm">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph as="div" size="xs">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
        </div>
    )
    .add("with link", () =>
        <div>
            <Paragraph size="2xl">If two pieces of the same type of <Link href="#">metal touch</Link> in space they <Link href="https://www.sharegate.com" external>will permanently</Link> bond.</Paragraph>
            <Paragraph size="xl">If two pieces of the same type of <Link href="#">metal touch</Link> in space they <Link href="https://www.sharegate.com" external>will permanently</Link> bond.</Paragraph>
            <Paragraph size="lg">If two pieces of the same type of <Link href="#">metal touch</Link> in space they <Link href="https://www.sharegate.com" external>will permanently</Link> bond.</Paragraph>
            <Paragraph>If two pieces of the same type of <Link href="#">metal touch</Link> in space they <Link href="https://www.sharegate.com" external>will permanently</Link> bond.</Paragraph>
            <Paragraph size="sm">If two pieces of the same type of <Link href="#">metal touch</Link> in space they <Link href="https://www.sharegate.com" external>will permanently</Link> bond.</Paragraph>
            <Paragraph size="xs">If two pieces of the same type of <Link href="#">metal touch</Link> in space they <Link href="https://www.sharegate.com" external>will permanently</Link> bond.</Paragraph>
        </div>
    )
    .add("styling", () =>
        <div>
            <Paragraph className="bg-red">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph style={{ backgroundColor: "red" }}>If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
        </div>
    );
