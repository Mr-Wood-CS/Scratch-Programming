#!/usr/bin/env python3
import html
import json
import sys
import xml.etree.ElementTree as ET


def clean(value):
    value = html.unescape(value or "")
    return " ".join(value.replace("\u00a0", " ").split())


path = sys.argv[1]
root = ET.parse(path).getroot()
ns = {"q": "http://www.imsglobal.org/xsd/ims_qtiasiv1p2"}
questions = []
for number, item in enumerate(root.findall(".//q:item", ns), 1):
    metadata = {}
    for field in item.findall("./q:itemmetadata/q:qtimetadata/q:qtimetadatafield", ns):
        label = field.findtext("q:fieldlabel", default="", namespaces=ns)
        entry = field.findtext("q:fieldentry", default="", namespaces=ns)
        metadata[label] = entry
    prompt = clean(item.findtext("./q:presentation/q:material/q:mattext", default="", namespaces=ns))
    options = []
    for label in item.findall(".//q:response_label", ns):
        options.append({
            "id": label.get("ident", ""),
            "text": clean(label.findtext("./q:material/q:mattext", default="", namespaces=ns)),
        })
    correct = item.findtext(".//q:respcondition/q:conditionvar/q:varequal", default="", namespaces=ns)
    questions.append({
        "number": number,
        "id": item.get("ident", ""),
        "type": metadata.get("question_type", ""),
        "prompt": prompt,
        "options": options,
        "correct": clean(correct),
    })
json.dump(questions, sys.stdout, ensure_ascii=False, indent=2)
sys.stdout.write("\n")
