import { Counter } from "@react-components/counter";
import { EmailIcon, IconList, InfoIcon, WarningIcon } from "@react-components/icons";
import { Inline, Stack } from "@react-components/layout";
import { Text } from "@react-components/text";
import { cloneElement } from "react";

function Switch({ element, ...rest }) {
    return cloneElement(element, rest);
}

export function createTestSuite(element, stories) {
    return stories
        .add("labeled", () =>
            <Stack>
                <Inline verticalAlign="end">
                    <Switch size="sm" element={element}>Engines</Switch>
                    <Switch element={element}>Engines</Switch>
                    <Switch size="lg" element={element}>Engines</Switch>
                </Inline>
                <Inline verticalAlign="end">
                    <Switch size="sm" element={element}>
                        <Text>Engines</Text>
                        <EmailIcon />
                    </Switch>
                    <Switch element={element}>
                        <Text>Engines</Text>
                        <EmailIcon />
                    </Switch>
                    <Switch size="lg" element={element}>
                        <Text>Engines</Text>
                        <EmailIcon />
                    </Switch>
                    <Switch disabled element={element}>
                        <Text>Engines</Text>
                        <EmailIcon />
                    </Switch>
                </Inline>
                <Inline verticalAlign="end">
                    <Switch size="sm" element={element}>
                        <Text>Engines</Text>
                        <IconList><EmailIcon /><EmailIcon /><EmailIcon /></IconList>
                    </Switch>
                    <Switch element={element}>
                        <Text>Engines</Text>
                        <IconList><EmailIcon /><EmailIcon /><EmailIcon /></IconList>
                    </Switch>
                    <Switch size="lg" element={element}>
                        <Text>Engines</Text>
                        <IconList><EmailIcon /><EmailIcon /><EmailIcon /></IconList>
                    </Switch>
                </Inline>
                <Inline verticalAlign="end">
                    <Switch size="sm" element={element}>
                        <Text>Engines</Text>
                        <Counter>60</Counter>
                    </Switch>
                    <Switch element={element}>
                        <Text>Engines</Text>
                        <Counter>60</Counter>
                    </Switch>
                    <Switch size="lg" element={element}>
                        <Text>Engines</Text>
                        <Counter>60</Counter>
                    </Switch>
                    <Switch disabled element={element}>
                        <Text>Engines</Text>
                        <Counter>60</Counter>
                    </Switch>
                </Inline>
                <Inline verticalAlign="end">
                    <Switch size="sm" element={element}>
                        <Text>Engines</Text>
                        <Counter variant="divider">60</Counter>
                    </Switch>
                    <Switch element={element}>
                        <Text>Engines</Text>
                        <Counter variant="divider">60</Counter>
                    </Switch>
                    <Switch size="lg" element={element}>
                        <Text>Engines</Text>
                        <Counter variant="divider">60</Counter>
                    </Switch>
                </Inline>
                <Inline verticalAlign="end">
                    <Switch size="sm" element={element}>
                        <Text>Engines</Text>
                        <EmailIcon />
                        <Counter>60</Counter>
                    </Switch>
                    <Switch element={element}>
                        <Text>Engines</Text>
                        <EmailIcon />
                        <Counter>60</Counter>
                    </Switch>
                    <Switch size="lg" element={element}>
                        <Text>Engines</Text>
                        <EmailIcon />
                        <Counter>60</Counter>
                    </Switch>
                </Inline>
                <Inline verticalAlign="end">
                    <Switch size="sm" element={element}>
                        <Text>Engines</Text>
                        <EmailIcon />
                        <Counter variant="divider">60</Counter>
                    </Switch>
                    <Switch element={element}>
                        <Text>Engines</Text>
                        <EmailIcon />
                        <Counter variant="divider">60</Counter>
                    </Switch>
                    <Switch size="lg" element={element}>
                        <Text>Engines</Text>
                        <EmailIcon />
                        <Counter variant="divider">60</Counter>
                    </Switch>
                </Inline>
            </Stack>
        )
        .add("no label", () =>
            <Stack>
                <Inline verticalAlign="end">
                    <Switch size="sm" element={element} />
                    <Switch element={element} />
                    <Switch size="lg" element={element} />
                </Inline>
                <Inline verticalAlign="end">
                    <Switch size="sm" element={element}>
                        <EmailIcon />
                    </Switch>
                    <Switch element={element}>
                        <EmailIcon />
                    </Switch>
                    <Switch size="lg" element={element}>
                        <EmailIcon />
                    </Switch>
                </Inline>
                <Inline verticalAlign="end">
                    <Switch size="sm" element={element}>
                        <IconList><EmailIcon /><EmailIcon /><EmailIcon /></IconList>
                    </Switch>
                    <Switch element={element}>
                        <IconList><EmailIcon /><EmailIcon /><EmailIcon /></IconList>
                    </Switch>
                    <Switch size="lg" element={element}>
                        <IconList><EmailIcon /><EmailIcon /><EmailIcon /></IconList>
                    </Switch>
                </Inline>
                <Inline verticalAlign="end">
                    <Switch size="sm" element={element}>
                        <Counter>60</Counter>
                    </Switch>
                    <Switch element={element}>
                        <Counter>60</Counter>
                    </Switch>
                    <Switch size="lg" element={element}>
                        <Counter>60</Counter>
                    </Switch>
                </Inline>
                <Inline verticalAlign="end">
                    <Switch size="sm" element={element}>
                        <Counter variant="divider">60</Counter>
                    </Switch>
                    <Switch element={element}>
                        <Counter variant="divider">60</Counter>
                    </Switch>
                    <Switch size="lg" element={element}>
                        <Counter variant="divider">60</Counter>
                    </Switch>
                </Inline>
                <Inline verticalAlign="end">
                    <Switch size="sm" element={element}>
                        <EmailIcon />
                        <Counter>60</Counter>
                    </Switch>
                    <Switch element={element}>
                        <EmailIcon />
                        <Counter>60</Counter>
                    </Switch>
                    <Switch size="lg" element={element}>
                        <EmailIcon />
                        <Counter>60</Counter>
                    </Switch>
                </Inline>
                <Inline verticalAlign="end">
                    <Switch size="sm" element={element}>
                        <EmailIcon />
                        <Counter variant="divider">60</Counter>
                    </Switch>
                    <Switch element={element}>
                        <EmailIcon />
                        <Counter variant="divider">60</Counter>
                    </Switch>
                    <Switch size="lg" element={element}>
                        <EmailIcon />
                        <Counter variant="divider">60</Counter>
                    </Switch>
                </Inline>
            </Stack>
        )
        .add("reverse", () =>
            <Stack>
                <div>
                    <Switch reverse element={element}>Engines</Switch>
                </div>
                <Inline>
                    <Switch reverse element={element}>
                        <Text>Engines</Text>
                        <IconList>
                            <EmailIcon /><InfoIcon /><WarningIcon />
                        </IconList>
                    </Switch>
                    <Switch reverse element={element}>
                        <IconList>
                            <EmailIcon /><InfoIcon /><WarningIcon />
                        </IconList>
                    </Switch>
                </Inline>
                <Inline>
                    <Switch reverse element={element}>
                        <Text>Engines</Text>
                        <Counter>60</Counter>
                    </Switch>
                    <Switch reverse element={element}>
                        <Counter>60</Counter>
                    </Switch>
                    <Switch reverse element={element}>
                        <Text>Engines</Text>
                        <Counter variant="divider">60</Counter>
                    </Switch>
                    <Switch reverse element={element}>
                        <Counter variant="divider">60</Counter>
                    </Switch>
                </Inline>
                <Inline>
                    <Switch reverse element={element}>
                        <Text>Engines</Text>
                        <IconList>
                            <EmailIcon /><InfoIcon /><WarningIcon />
                        </IconList>
                        <Counter>60</Counter>
                    </Switch>
                    <Switch reverse element={element}>
                        <IconList>
                            <EmailIcon /><InfoIcon /><WarningIcon />
                        </IconList>
                        <Counter>60</Counter>
                    </Switch>
                    <Switch reverse element={element}>
                        <Text>Engines</Text>
                        <IconList>
                            <EmailIcon /><InfoIcon /><WarningIcon />
                        </IconList>
                        <Counter variant="divider">60</Counter>
                    </Switch>
                    <Switch reverse element={element}>
                        <IconList>
                            <EmailIcon /><InfoIcon /><WarningIcon />
                        </IconList>
                        <Counter variant="divider">60</Counter>
                    </Switch>
                </Inline>
            </Stack>
        )
        .add("validation", () =>
            <Inline>
                <Switch validationState="invalid" element={element}>Engines</Switch>
                <Switch validationState="valid" active element={element}>Engines</Switch>
            </Inline>
        )
        .add("states", () =>
            <Stack>
                <Inline verticalAlign="end">
                    <Switch active size="sm" element={element}>Engines</Switch>
                    <Switch active element={element}>Engines</Switch>
                    <Switch active size="lg" element={element}>Engines</Switch>
                </Inline>
                <Inline verticalAlign="end">
                    <Switch focus size="sm" element={element}>Engines</Switch>
                    <Switch focus element={element}>Engines</Switch>
                    <Switch focus size="lg" element={element}>Engines</Switch>
                </Inline>
                <Inline verticalAlign="end">
                    <Switch hover size="sm" element={element}>Engines</Switch>
                    <Switch hover element={element}>Engines</Switch>
                    <Switch hover size="lg" element={element}>Engines</Switch>
                </Inline>
                <Inline verticalAlign="end">
                    <Switch focus hover size="sm" element={element}>Engines</Switch>
                    <Switch focus hover element={element}>Engines</Switch>
                    <Switch focus hover size="lg" element={element}>Engines</Switch>
                </Inline>
                <Inline verticalAlign="end">
                    <Switch disabled size="sm" element={element}>Engines</Switch>
                    <Switch disabled element={element}>Engines</Switch>
                    <Switch disabled size="lg" element={element}>Engines</Switch>
                </Inline>
            </Stack>
        )
        .add("overflow", () =>
            <Stack>
                <div className="mw5">
                    <Switch element={element}>PA-99-N2 event and possible exoplanet in galaxy</Switch>
                </div>
                <div className="mw5">
                    <Switch element={element}>
                        <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                        <IconList>
                            <EmailIcon /><EmailIcon />
                        </IconList>
                    </Switch>
                </div>
                <div className="mw5">
                    <Switch element={element}>
                        <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                        <Counter variant="divider">60</Counter>
                    </Switch>
                </div>
                <div className="mw5">
                    <Switch element={element}>
                        <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                        <Counter>60</Counter>
                    </Switch>
                </div>
            </Stack>
        );
}
