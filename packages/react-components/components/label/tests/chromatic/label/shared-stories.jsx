import { Button } from "@orbit-ui/react-button/src";
import { CloseIcon, CommunicationIcon } from "@orbit-ui/react-icons/src";
import { Tag } from "@orbit-ui/react-label/src";
import { cloneElement } from "react";

function Label({ element, ...rest }) {
    return cloneElement(element, rest);
}

export function createSharedStories(label, stories) {
    return stories
        .add("default", () =>
            <div className="flex flex-column">
                <div className="flex mb5">
                    <Label element={label} className="mr5">Notification Sent</Label>
                    <Label highlight element={label} className="mr5">Notification Sent</Label>
                    <Label className="bg-red" element={label}>Notification Sent</Label>
                </div>
                <div className="flex items-end mb5">
                    <Label size="mini" element={label} className="mr5">Notification Sent</Label>
                    <Label size="tiny" element={label} className="mr5">Notification Sent</Label>
                    <Label size="small" element={label} className="mr5">Notification Sent</Label>
                    <Label element={label} className="mr5">Notification Sent</Label>
                    <Label size="large" element={label}>Notification Sent</Label>
                </div>
                <div className="flex items-end mb5">
                    <Label size="mini" icon={<CommunicationIcon />} element={label} className="mr5">Notification Sent</Label>
                    <Label size="tiny" icon={<CommunicationIcon />} element={label} className="mr5">Notification Sent</Label>
                    <Label size="small" icon={<CommunicationIcon />} element={label} className="mr5">Notification Sent</Label>
                    <Label icon={<CommunicationIcon />} element={label} className="mr5">Notification Sent</Label>
                    <Label size="large" icon={<CommunicationIcon />} element={label}>Notification Sent</Label>
                </div>
                <div className="flex items-end mb5">
                    <Label size="mini" icon={<CommunicationIcon />} iconPosition="right" element={label} className="mr5">Notification Sent</Label>
                    <Label size="tiny" icon={<CommunicationIcon />} iconPosition="right" element={label} className="mr5">Notification Sent</Label>
                    <Label size="small" icon={<CommunicationIcon />} iconPosition="right" element={label} className="mr5">Notification Sent</Label>
                    <Label icon={<CommunicationIcon />} iconPosition="right" element={label} className="mr5">Notification Sent</Label>
                    <Label size="large" icon={<CommunicationIcon />} iconPosition="right" element={label}>Notification Sent</Label>
                </div>
                <div className="flex items-end mb5">
                    <Label size="mini" icon={<CommunicationIcon />} element={label} className="mr5" />
                    <Label size="tiny" icon={<CommunicationIcon />} element={label} className="mr5" />
                    <Label size="small" icon={<CommunicationIcon />} element={label} className="mr5" />
                    <Label icon={<CommunicationIcon />} element={label} className="mr5" />
                    <Label size="large" icon={<CommunicationIcon />} element={label} />
                </div>
                <div className="flex mb5">
                    <Label icon={<CommunicationIcon className="fill-red" />} element={label}>Notification Sent</Label>
                </div>
                <div className="flex items-end mb5">
                    <Label size="mini" tag={<Tag className="bg-red" />} element={label} className="mr5">Notification Sent</Label>
                    <Label size="tiny" tag={<Tag className="bg-red" />} element={label} className="mr5">Notification Sent</Label>
                    <Label size="small" tag={<Tag className="bg-red" />} element={label} className="mr5">Notification Sent</Label>
                    <Label tag={<Tag className="bg-red" />} element={label} className="mr5">Notification Sent</Label>
                    <Label size="large" tag={<Tag className="bg-red" />} element={label}>Notification Sent</Label>
                </div>
                <div className="flex items-end mb5">
                    <Label size="mini" tag={<Tag className="bg-red" />} icon={<CommunicationIcon />} iconPosition="right" element={label} className="mr5">Notification Sent</Label>
                    <Label size="tiny" tag={<Tag className="bg-red" />} icon={<CommunicationIcon />} iconPosition="right" element={label} className="mr5">Notification Sent</Label>
                    <Label size="small" tag={<Tag className="bg-red" />} icon={<CommunicationIcon />} iconPosition="right" element={label} className="mr5">Notification Sent</Label>
                    <Label tag={<Tag className="bg-red" />} icon={<CommunicationIcon />} iconPosition="right" element={label} className="mr5">Notification Sent</Label>
                    <Label size="large" tag={<Tag className="bg-red" />} icon={<CommunicationIcon />} iconPosition="right" element={label}>Notification Sent</Label>
                </div>
                <div className="flex items-end mb5">
                    <Label size="mini" button={<Button icon={<CloseIcon />} />} element={label} className="mr5">Notification Sent</Label>
                    <Label size="tiny" button={<Button icon={<CloseIcon />} />} element={label} className="mr5">Notification Sent</Label>
                    <Label size="small" button={<Button icon={<CloseIcon />} />} element={label} className="mr5">Notification Sent</Label>
                    <Label button={<Button icon={<CloseIcon />} />} element={label} className="mr5">Notification Sent</Label>
                    <Label size="large" button={<Button icon={<CloseIcon />} />} element={label}>Notification Sent</Label>
                </div>
                <div className="flex items-end mb5">
                    <Label size="mini" button={<Button icon={<CloseIcon />} />} icon={<CommunicationIcon />} element={label} className="mr5">Notification Sent</Label>
                    <Label size="tiny" button={<Button icon={<CloseIcon />} />} icon={<CommunicationIcon />} element={label} className="mr5">Notification Sent</Label>
                    <Label size="small" button={<Button icon={<CloseIcon />} />} icon={<CommunicationIcon />} element={label} className="mr5">Notification Sent</Label>
                    <Label button={<Button icon={<CloseIcon />} />} icon={<CommunicationIcon />} element={label} className="mr5">Notification Sent</Label>
                    <Label size="large" button={<Button icon={<CloseIcon />} />} icon={<CommunicationIcon />} element={label}>Notification Sent</Label>
                </div>
            </div>
        )
        .add("circular", () =>
            <div className="flex flex-column">
                <div className="flex mb5">
                    <Label circular element={label} className="mr5">R</Label>
                    <Label highlight circular element={label} className="mr5">R</Label>
                    <Label className="bg-red" circular element={label}>R</Label>
                </div>
                <div className="flex items-end mb5">
                    <Label size="tiny" circular element={label} className="mr5">R</Label>
                    <Label size="small" circular element={label} className="mr5">R</Label>
                    <Label circular element={label} className="mr5">R</Label>
                    <Label size="large" circular element={label} className="mr5">R</Label>
                    <Label size="big" circular element={label} className="mr5">R</Label>
                    <Label size="huge" circular element={label} className="mr5">R</Label>
                    <Label size="massive" circular element={label}>R</Label>
                </div>
                <div className="flex items-end mb5">
                    <Label size="tiny" icon={<CommunicationIcon />} circular element={label} className="mr5" />
                    <Label size="small" icon={<CommunicationIcon />} circular element={label} className="mr5" />
                    <Label icon={<CommunicationIcon />} circular element={label} className="mr5" />
                    <Label size="large" icon={<CommunicationIcon />} circular element={label} className="mr5" />
                    <Label size="big" icon={<CommunicationIcon />} circular element={label} className="mr5" />
                    <Label size="huge" icon={<CommunicationIcon />} circular element={label} className="mr5" />
                    <Label size="massive" icon={<CommunicationIcon />} circular element={label} />
                </div>
                <div className="flex mb5">
                    <Label icon={<CommunicationIcon className="fill-red" />} circular element={label} />
                </div>
            </div>
        );
}