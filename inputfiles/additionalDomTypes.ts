
interface NodeListOf<TNode extends Node> extends NodeList {
    length: number;
    item(index: number): TNode;
    [index: number]: TNode;
}
