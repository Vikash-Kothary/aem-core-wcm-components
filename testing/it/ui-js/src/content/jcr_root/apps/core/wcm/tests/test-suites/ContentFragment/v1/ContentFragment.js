/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2019 Adobe
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
;(function(h, $) { // eslint-disable-line no-extra-semi
    "use strict";

    var c = window.CQ.CoreComponentsIT.commons;
    var contentfragment = window.CQ.CoreComponentsIT.ContentFragment.v1;
    var selectors = {
        contentfragment: {
            self: ".cmp-contentfragment",
            title: ".cmp-contentfragment__title",
            elements: {
                self: ".cmp-contentfragment__elements",
                element: {
                    title: ".cmp-contentfragment__element-title",
                    value: ".cmp-contentfragment__element-value"
                }
            }
        },
        editDialog: {
            content: "cq-dialog-content",
            tabs: {
                properties: ".cmp-contentfragment__editor coral-tab:eq(0)"
            },
            elements: {
                addButton: "[coral-multifield-add]",
                last: "coral-multifield-item:last",
                select: {
                    button: "coral-select[name='./elementNames']  > button",
                    item: "coral-select[name='./elementNames'] coral-selectlist coral-selectlist-item"
                }
            },
            fragmentPath: "[name='./fragmentPath']",
            tagNames: "[name='./tagNames']"
        }
    };

    var tcExecuteBeforeTest = contentfragment.tcExecuteBeforeTest(c.tcExecuteBeforeTest, c.rtContentFragment_v1,
        "core/wcm/tests/components/test-page-v2", "core.wcm.components.contentfragment.v1");
    var tcExecuteAfterTest  = contentfragment.tcExecuteAfterTest(c.tcExecuteAfterTest, c.policyPath, c.policyAssignmentPath);

    new h.TestSuite("ContentFragment v1", {
        path: "/apps/core/wcm/tests/core-components-it/v1/ContentFragment.js",
        execBefore: c.tcExecuteBeforeTestSuite,
        execInNewWindow: false
    })
        .addTestCase(contentfragment.tcSetFragmentPath(tcExecuteBeforeTest, tcExecuteAfterTest, selectors))
        .addTestCase(contentfragment.tcSetVariationName(tcExecuteBeforeTest, tcExecuteAfterTest, selectors))
        .addTestCase(contentfragment.tcSetStructuredContentFragment(tcExecuteBeforeTest, tcExecuteAfterTest, selectors))
        .addTestCase(contentfragment.tcSetElementNames(tcExecuteBeforeTest, tcExecuteAfterTest, selectors));
}(hobs, jQuery));
