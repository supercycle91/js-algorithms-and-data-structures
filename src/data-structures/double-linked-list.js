const Node = require('./node');

class DoubleLinkedList {
	constructor() {
		this.first = null;
	}
	add(data) {
		if (this.first === null) this.first = new Node(data, null);
		else {
			let currentNode = this.first;
			while (true) {
				if (currentNode.next === null) {
					currentNode.setNext(new Node(data, null, currentNode));
					break;
				} else currentNode = currentNode.next;
			}
		}
	}
	insert(data, afterNode) {
		if (!data) throw new Error('You need to pass a valid data.');
		if (!afterNode) throw new Error('You need to pass a valid node.');
		let currentNode = this.first;
		do {
			if (currentNode == afterNode) {
				let newNode = new Node(data, currentNode.next, currentNode);
				currentNode.setNext(newNode);
				break;
			} else currentNode = currentNode.next;
		} while (currentNode);
	}
	contains(data) {
		let found = false;
		let currentNode = this.first;
		while (currentNode !== null && !found) {
			if (currentNode.data == data) found = true;
			else currentNode = currentNode.next;
		}
		return found;
	}
}
module.exports = DoubleLinkedList;
