import Leave from "../models/Leave.js";

export const getMyLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find({
      employeeId: req.user.userId,
    }).sort({ createdAt: -1 });

    res.status(200).json(leaves);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getPendingLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find({
      status: "Pending",
    }).populate("employeeId", "name empID email");

    res.status(200).json(leaves);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const applyLeave = async (req, res) => {
  try {
    const {
      leaveType,
      startDate,
      endDate,
      reason,
    } = req.body;

    const leave = await Leave.create({
      employeeId: req.user.userId,
      leaveType,
      startDate,
      endDate,
      reason,
    });

    res.status(201).json({
      message: "Leave applied successfully",
      leave,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const approveLeave = async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id);

    if (!leave) {
      return res.status(404).json({
        message: "Leave not found",
      });
    }

    leave.status = "Approved";

    await leave.save();

    res.status(200).json({
      message: "Leave approved",
      leave,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const rejectLeave = async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id);

    if (!leave) {
      return res.status(404).json({
        message: "Leave not found",
      });
    }

    leave.status = "Rejected";
    leave.managerComments =
      req.body.managerComments || "";

    await leave.save();

    res.status(200).json({
      message: "Leave rejected",
      leave,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};